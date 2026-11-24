"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe, Appearance, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { pdf } from "@react-pdf/renderer";
import { sendGTMEvent } from "@next/third-parties/google";

import ContactInformation from "../ContactInformation/ContactInformation";
import Paymentmethod from "../Paymentmethod/Paymentmethod";
import CheckoutCourseDetails from "../CheckoutCourseDetails/CheckoutCourseDetails";
import OrderSummary from "../Ordersummary/Ordersummary";
import DiscountCode from "../DiscountCode/DiscountCode";
import InvoiceDocument from "../InvoiceDocument/InvoiceDocument";
import CheckoutStep from "../CheckoutStep/CheckoutStep";
import AttendeesStepper from "../AttendeesStepper/AttendeesStepper";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { CheckoutDetails, CheckoutField, FieldErrors, PaymentMethodId } from "../types";
import { countries } from "@/data/Countries/countries";
import { getDisplayDate } from "@/utils/ConvertDate";
import {
  CheckoutTotals,
  EMAIL_REGEX,
  InvoiceDeadline,
  computeTotals,
  formatMoney,
  getInvoiceDeadline,
  getUnitPriceForCountry,
  isValidPhone,
} from "@/utils/checkout";

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

const appearance: Appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#05668D",
    colorBackground: "#FFFFFF",
    colorText: "#141834",
    colorDanger: "#DC2626",
    fontFamily: "Inter, system-ui, sans-serif",
    spacingUnit: "5px",
    borderRadius: "8px",
  },
  rules: {
    ".Tab": { display: "none" },
    ".Input": { border: "1px solid #BFBFBF", boxShadow: "none" },
    ".Input:focus": { border: "1px solid #05668D", boxShadow: "0 0 0 2px #05668D" },
    ".Label": { color: "#141834", fontWeight: "500" },
  },
};

const toTitleCase = (value: string) => value.replace(/\b\w/g, (c) => c.toUpperCase());

function WrapperCheckout({ course, classSysId }: any) {
  const searchParams = useSearchParams();
  const country = (searchParams.get("country") ?? "").toLowerCase();
  const isUk = country === "united kingdom";
  const classDetail = course?.classes?.find(
    (cls: { classSysId: string }) => cls.classSysId === classSysId
  );
  const unitPrice = getUnitPriceForCountry(classDetail, country);

  // Deferred-intent mode: the card form renders immediately and the payment
  // is only created when the customer presses Pay. The amount is kept in sync
  // inside CheckoutForm via elements.update().
  const [elementsOptions] = useState<StripeElementsOptions>(() => ({
    mode: "payment",
    amount: computeTotals({ unitPrice, quantity: 1, isUk }).totalMinor || 100,
    currency: isUk ? "gbp" : "usd",
    appearance,
  }));

  if (!classDetail) {
    return (
      <div className="bg-[#f5f5f5]">
        <div className="container pt-36 pb-24 flex flex-col gap-4">
          <h1 className="text-[32px] leading-[40px] font-medium text-[#141834]">
            This class is no longer available
          </h1>
          <p className="font-secondary text-main">
            It may be fully booked or the date may have changed.{" "}
            <Link href="/academy" className="text-[#05668D] underline">
              See upcoming classes
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={elementsOptions}>
      <CheckoutForm
        course={course}
        classDetail={classDetail}
        country={country}
        isUk={isUk}
        unitPrice={unitPrice}
      />
    </Elements>
  );
}

interface CheckoutFormProps {
  course: any;
  classDetail: any;
  country: string;
  isUk: boolean;
  unitPrice: number;
}

type Confirmation =
  | { kind: "card"; email: string; total: string; quantity: number }
  | { kind: "invoice"; recipient: string };

// Order matters: the first invalid field in this list gets focus.
const FIELD_ORDER: CheckoutField[] = [
  "fullName",
  "email",
  "paymentMethod",
  "addressLine1",
  "city",
  "postcode",
  "billingCountry",
  "phone",
  "invoiceEmail",
];

function CheckoutForm({ course, classDetail, country, isUk, unitPrice }: CheckoutFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stripe = useStripe();
  const elements = useElements();

  const [details, setDetails] = useState<CheckoutDetails>(() => ({
    fullName: "",
    email: "",
    numberOfAttendees: 1,
    company: "",
    billingContact: "",
    poNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    billingCountry: countries.find((c) => c.toLowerCase() === country) ?? "",
    phone: "",
    sendToSomeoneElse: false,
    invoiceEmail: "",
  }));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodId | "">("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  const totals: CheckoutTotals = useMemo(
    () =>
      computeTotals({
        unitPrice,
        quantity: details.numberOfAttendees,
        discountPercent,
        isUk,
      }),
    [unitPrice, details.numberOfAttendees, discountPercent, isUk]
  );
  const money = (n: number) => formatMoney(n, isUk);

  const deadline: InvoiceDeadline = useMemo(
    () => getInvoiceDeadline(classDetail.startDate, classDetail.timeZone),
    [classDetail.startDate, classDetail.timeZone]
  );

  const pricingRegion = toTitleCase(country) || "Not set";
  const displayDate = getDisplayDate(classDetail.startDate, classDetail.endDate, classDetail.timeZone);

  // Keep the card form's amount (used by wallets like Apple Pay) in step with the order.
  useEffect(() => {
    if (elements && totals.totalMinor > 0) {
      elements.update({ amount: totals.totalMinor });
    }
  }, [elements, totals.totalMinor]);

  // Returning from a payment method that redirected away (rare for cards).
  useEffect(() => {
    if (searchParams.get("redirect_status") === "succeeded") {
      setConfirmation({ kind: "card", email: "", total: "", quantity: 0 });
    }
  }, [searchParams]);

  const updateDetail = useCallback(
    <K extends keyof CheckoutDetails>(name: K, value: CheckoutDetails[K]) => {
      setDetails((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => {
        if (!prev[name] && !(name === "sendToSomeoneElse" && prev.invoiceEmail)) return prev;
        const next = { ...prev };
        delete next[name];
        if (name === "sendToSomeoneElse") delete next.invoiceEmail;
        return next;
      });
    },
    []
  );

  const selectMethod = (method: PaymentMethodId) => {
    setSelectedMethod(method);
    setFormError(null);
    setErrors((prev) => {
      // Errors from the other method's fields no longer apply.
      const next: FieldErrors = {};
      if (prev.fullName) next.fullName = prev.fullName;
      if (prev.email) next.email = prev.email;
      return next;
    });
  };

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!details.fullName.trim()) e.fullName = "Enter your full name.";
    if (!details.email.trim()) e.email = "Enter your email address.";
    else if (!EMAIL_REGEX.test(details.email.trim()))
      e.email = "Enter an email address like name@example.com.";
    if (!selectedMethod) e.paymentMethod = "Choose how you'd like to pay.";

    if (selectedMethod === "invoice") {
      if (!details.addressLine1.trim()) e.addressLine1 = "Enter the first line of the billing address.";
      if (!details.city.trim()) e.city = "Enter the town or city.";
      if (!details.postcode.trim()) e.postcode = "Enter the postcode or ZIP.";
      if (!details.billingCountry.trim()) e.billingCountry = "Select the billing country.";
      if (details.phone.trim() && !isValidPhone(details.phone.trim()))
        e.phone = "Enter a phone number with 7–15 digits, e.g. +44 7700 900123.";
      if (details.sendToSomeoneElse) {
        if (!details.invoiceEmail.trim()) e.invoiceEmail = "Enter the email address to send the invoice to.";
        else if (!EMAIL_REGEX.test(details.invoiceEmail.trim()))
          e.invoiceEmail = "Enter an email address like accounts@example.com.";
      }
    }
    return e;
  };

  const focusFirstError = (e: FieldErrors) => {
    const first = FIELD_ORDER.find((f) => e[f]);
    if (!first) return;
    const el = document.getElementById(first);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus({ preventScroll: true });
  };

  const payByCard = async () => {
    if (!stripe || !elements) {
      setFormError("The card form is still loading. Please try again in a moment.");
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setFormError(submitError.message ?? "Please check your card details.");
      return;
    }

    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // The server works out the price itself from these.
      body: JSON.stringify({
        slug: course.slug,
        classSysId: classDetail.classSysId,
        country,
        quantity: details.numberOfAttendees,
        discountCode: appliedCode,
        email: details.email.trim(),
        fullName: details.fullName.trim(),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!data.clientSecret) {
      setFormError(data.error || "We couldn't start your payment. You have not been charged. Please try again.");
      return;
    }
    // Never charge a different amount from the one on the Pay button.
    if (data.amount !== totals.totalMinor) {
      setFormError(
        "The price has changed since this page loaded. Please refresh and try again. You have not been charged."
      );
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret: data.clientSecret,
      confirmParams: { return_url: window.location.href },
      redirect: "if_required",
    });

    if (error) {
      setFormError(error.message ?? "Your payment didn't go through. Please try again.");
      return;
    }
    if (paymentIntent?.status === "succeeded" || paymentIntent?.status === "processing") {
      sendGTMEvent({ event: "purchase", value: totals.net, category: "checkout", label: "Credit Card" });
      setConfirmation({
        kind: "card",
        email: details.email.trim(),
        total: money(totals.total),
        quantity: details.numberOfAttendees,
      });
    } else {
      setFormError("Your payment couldn't be completed. Please try again.");
    }
  };

  const sendInvoice = async () => {
    const contactEmail = details.email.trim();
    const recipient = details.sendToSomeoneElse ? details.invoiceEmail.trim() : contactEmail;
    const addressLines = [
      details.addressLine1,
      details.addressLine2,
      [details.city, details.postcode].map((v) => v.trim()).filter(Boolean).join(" "),
      details.billingCountry,
    ]
      .map((line) => line.trim())
      .filter(Boolean);

    const data = {
      fullname: details.fullName.trim(),
      company: details.company.trim(),
      billingContact: details.billingContact.trim(),
      poNumber: details.poNumber.trim(),
      phoneNumber: details.phone.trim(),
      email: recipient,
      addressLines,
      quantity: details.numberOfAttendees,
    };

    const selectedCourse = {
      // Raw dates: the invoice formats them in the class timezone.
      startDate: classDetail.startDate,
      endDate: classDetail.endDate,
      timeZone: classDetail.timeZone,
      quantity: details.numberOfAttendees,
      price: unitPrice,
      discountPercent,
      acronym: course.acronym,
    };

    const asPdf = pdf();
    asPdf.updateContainer(
      <InvoiceDocument data={data} selectedCourse={selectedCourse} isUk={isUk} deadline={deadline} />
    );
    const blob = await asPdf.toBlob();

    // Greet whoever receives the invoice: the billing contact if given,
    // a neutral greeting if it goes to someone else, otherwise the student.
    const sentToSomeoneElse = recipient.toLowerCase() !== contactEmail.toLowerCase();
    const greetingName = data.billingContact || (sentToSomeoneElse ? "Sir/Madam" : data.fullname);

    const formData = new FormData();
    formData.append("file", blob, `Invoice_ValueHut_${data.fullname}_${Date.now()}.pdf`);
    formData.append("toEmail", recipient);
    formData.append("subject", `Invoice for ${course.title} (${course.acronym})`);
    formData.append("customerName", greetingName);
    formData.append("courseName", course?.title ?? "");
    formData.append("paymentDue", deadline.label ?? "");
    formData.append("paymentDueImmediately", String(deadline.isPastDeadline));

    const res = await fetch("/api/sendEmail", { method: "POST", body: formData });
    const result = await res.json().catch(() => ({ error: true }));
    if (!res.ok || result.error) {
      setFormError(
        "We couldn't send your invoice. Please try again, or email info@valuehut.co and we'll send it manually."
      );
      return;
    }
    sendGTMEvent({ event: "purchase", value: totals.net, category: "checkout", label: "invoice" });
    setConfirmation({ kind: "invoice", recipient });
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setFormError(null);
    const e = validate();
    setErrors(e);
    const count = Object.keys(e).length;
    if (count) {
      setFormError(
        e.paymentMethod && count === 1
          ? "Choose how you'd like to pay to continue."
          : `Please fix the ${count === 1 ? "highlighted field" : `${count} highlighted fields`} to continue.`
      );
      focusFirstError(e);
      return;
    }

    setSubmitting(true);
    try {
      if (selectedMethod === "card") await payByCard();
      else await sendInvoice();
    } catch (err) {
      console.error(err);
      setFormError("Something went wrong. Please try again, or contact info@valuehut.co.");
    } finally {
      setSubmitting(false);
    }
  };

  const ctaLabel = (() => {
    if (selectedMethod === "card") return submitting ? "Processing payment…" : `Pay ${money(totals.total)}`;
    if (selectedMethod === "invoice") {
      if (submitting) return "Sending invoice…";
      return details.sendToSomeoneElse ? "Send the invoice" : "Email me the invoice";
    }
    return "Choose a payment method";
  })();

  const ctaNote =
    selectedMethod === "card"
      ? "Secure payment by Stripe. Your place is confirmed instantly."
      : selectedMethod === "invoice"
        ? deadline.isPastDeadline
          ? "Payment is due immediately. Your place is confirmed once it's received."
          : `Payment due by ${deadline.label ?? "14 days before the class"}. We hold your place until then.`
        : null;

  const ctaButton = (extraClass = "") => (
    <button
      type="button"
      onClick={handleSubmit}
      disabled={submitting}
      aria-busy={submitting}
      className={`w-full rounded-xl bg-fill-brand-secondary text-main py-4 px-6 text-lg font-medium font-secondary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#05668D] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-wait ${extraClass}`}
    >
      {ctaLabel}
    </button>
  );

  const formErrorBox = formError && (
    <p role="alert" className="text-sm font-secondary text-red-600">
      {formError}
    </p>
  );

  const backToAcademy = () => router.push("/academy");

  return (
    <div className="bg-[#f5f5f5]">
      <div className="container pb-36 lg:pb-36">
        <div className="flex flex-col gap-4 pt-36 pb-6 px-4 sm:px-0">
          <div>
            <button
              type="button"
              className="py-1 px-[10px] bg-[#E4EEF3] rounded-full flex gap-2 items-center focus:outline-none focus:ring-2 focus:ring-[#05668D]"
              onClick={() => router.back()}
            >
              <Image src="/less.svg" width={20} height={20} alt="" className="object-contain w-4 h-4" />
              <span className="text-main text-[15px] leading-[22px] font-secondary font-medium">
                Back to class details
              </span>
            </button>
          </div>
          <h1 className="text-[40px] leading-[52px] font-medium text-[#141834]">Checkout</h1>
          <p className="font-secondary text-sm text-secondary">
            All fields are required unless marked optional.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Summary: first on mobile so people see what they're buying; right column on desktop */}
          <aside
            aria-label="Your order"
            className="order-1 lg:order-2 w-full lg:w-[420px] lg:flex-none lg:sticky lg:top-28 flex flex-col gap-6 bg-white p-4 md:p-8 rounded-2xl"
          >
            <CheckoutCourseDetails
              image={course.logo}
              title={course.title}
              date={displayDate}
              time={`${classDetail.time} ${classDetail.timeZone}`}
              classType={classDetail.classType}
              pricingRegion={pricingRegion}
              isUk={isUk}
            />
            <hr className="border-[#E5E5E5]" />
            <OrderSummary
              totals={totals}
              isUk={isUk}
              appliedCode={appliedCode}
              discountSlot={
                <DiscountCode
                  appliedCode={appliedCode}
                  discountPercent={discountPercent}
                  onApply={(percent, code) => {
                    setDiscountPercent(percent);
                    setAppliedCode(code);
                  }}
                  onRemove={() => {
                    setDiscountPercent(0);
                    setAppliedCode(null);
                  }}
                />
              }
            />
            <div className="hidden lg:flex flex-col gap-3">
              {formErrorBox}
              {ctaButton()}
              {ctaNote && (
                <p className="text-sm font-secondary text-secondary text-center">{ctaNote}</p>
              )}
            </div>
          </aside>

          <div className="order-2 lg:order-1 w-full flex-1 min-w-0 flex flex-col gap-12 bg-white p-4 md:p-8 rounded-2xl">
            <CheckoutStep id="step-booking" step={1} title="Your booking">
              <AttendeesStepper
                value={details.numberOfAttendees}
                onChange={(n) => updateDetail("numberOfAttendees", n)}
                unitPriceLabel={money(unitPrice)}
              />
            </CheckoutStep>

            <CheckoutStep id="step-details" step={2} title="Your details">
              <ContactInformation details={details} errors={errors} updateDetail={updateDetail} />
            </CheckoutStep>

            <CheckoutStep
              id="step-payment"
              step={3}
              title="How would you like to pay?"
              description="Pay by card to confirm your place now, or request an invoice for your company to pay by bank transfer."
            >
              <Paymentmethod
                selectedMethod={selectedMethod}
                onSelect={selectMethod}
                details={details}
                errors={errors}
                updateDetail={updateDetail}
                deadline={deadline}
                pricingRegion={pricingRegion}
                cardAvailable={Boolean(stripePromise)}
              />
            </CheckoutStep>
          </div>
        </div>
      </div>

      {/* Mobile: the action is always within reach */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white border-t border-[#E5E5E5] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex flex-col gap-2">
        {formErrorBox}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-secondary text-secondary">Total</span>
            <span className="text-lg font-semibold font-secondary text-main whitespace-nowrap">
              {money(totals.total)}
            </span>
          </div>
          {ctaButton("flex-1 !py-3 !text-base")}
        </div>
      </div>

      {confirmation?.kind === "card" && (
        <ConfirmationModal title="You're booked!" actionLabel="Back to Academy" onAction={backToAcademy}>
          <p>
            {confirmation.total ? (
              <>
                Your payment of <strong>{confirmation.total}</strong> was successful and{" "}
                {confirmation.quantity > 1 ? `${confirmation.quantity} places are` : "your place is"}{" "}
                confirmed on <strong>{course.title}</strong> ({displayDate}).
              </>
            ) : (
              <>
                Your payment was successful and your booking on <strong>{course.title}</strong> (
                {displayDate}) is confirmed.
              </>
            )}
          </p>
          {confirmation.email && (
            <p>
              A receipt is on its way to <strong className="break-all">{confirmation.email}</strong>.
            </p>
          )}
          <p>We&apos;ll email you more information about the class within 24 hours.</p>
        </ConfirmationModal>
      )}

      {confirmation?.kind === "invoice" && (
        <ConfirmationModal title="Invoice sent" actionLabel="Back to Academy" onAction={backToAcademy}>
          <p>
            We&apos;ve emailed the invoice for <strong>{course.title}</strong> ({displayDate}) to{" "}
            <strong className="break-all">{confirmation.recipient}</strong>.
          </p>
          {deadline.isPastDeadline || !deadline.label ? (
            <p>
              Payment is due {deadline.isPastDeadline ? "immediately" : "at least 14 days before the class starts"}.
              Your place is confirmed once we receive it.
            </p>
          ) : (
            <p>
              Please pay by <strong>{deadline.label}</strong>. We&apos;re holding your place until
              then, and it&apos;s confirmed once payment is received.
            </p>
          )}
          <p className="text-sm text-secondary">
            Can&apos;t see the email? Check your spam folder or contact{" "}
            <a href="mailto:info@valuehut.co" className="underline">
              info@valuehut.co
            </a>
            .
          </p>
        </ConfirmationModal>
      )}
    </div>
  );
}

export default WrapperCheckout;
