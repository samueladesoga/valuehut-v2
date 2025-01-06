"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContactInformation from "../ContactInformation/ContactInformation";
import Paymentmethod from "../Paymentmethod/Paymentmethod";
import CheckoutCourseDetails from "../CheckoutCourseDetails/CheckoutCourseDetails";
import OrderSummary from "../Ordersummary/Ordersummary";
import Button from "@/components/Button/Button";
import { primaryMarket, tertiaryMarket } from "@/data/Countries/countries";
import { useRouter, useSearchParams } from "next/navigation";
import InvoiceDocument from "../InvoiceDocument/InvoiceDocument";
import { pdf } from "@react-pdf/renderer";
import { getDisplayDate, getMonthAndDay, getYear } from "@/utils/ConvertDate";

interface PaymentMethod {
  id: string;
  name: string;
  creditCards?: string;
  customIcon?: string;
}
interface Details {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  numberOfAttendees: number;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "credit-card",
    name: "Credit Card",
    creditCards: "/images/creditcards.png",
  },
  {
    id: "invoice",
    name: "Pay with Invoice",
    customIcon: "/icons/receipt.svg",
  },
];

function WrapperCheckout({ course, classId }: any) {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [searchParams] = useSearchParams();
  const [classPrice, setClassPrice] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [_errors, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [subtotal, setSubtotal] = useState(0);

  const [details, setDetails] = useState<Details>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    numberOfAttendees: 1,
  });

  const acronym = course.acronym;

  const classDetail = course.classes.find(
    (cls: { classId: number }) => cls.classId === parseInt(classId)
  );
  const country = searchParams[1];

  useEffect(() => {
    if (classDetail) {
      let price;
      if (country === "united kingdom") {
        price = classDetail.ukPrice;
        setSubtotal(price);
      } else if (primaryMarket.includes(country)) {
        price = classDetail.primary;
        setSubtotal(price);
      } else if (tertiaryMarket.includes(country)) {
        price = classDetail.tertiary;
        setSubtotal(price);
      } else {
        price = classDetail.secondary;
        setSubtotal(price);
      }
      setClassPrice(price * details.numberOfAttendees);
    }
  }, [classDetail, country, details]);

  const handlePayment = async () => {
    if (!details.fullName.trim()) {
      setError("Full Name is required to proceed.");
      setSuccess(null);
      return;
    }

    if (!details.email.trim()) {
      setError("Email is required to proceed.");
      setSuccess(null);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(details.email)) {
      setError("Please enter a valid email address.");
      setSuccess(null);
      return;
    }

    if (selectedMethod === "invoice") {
      if (!details.address.trim()) {
        setError("Address is required for 'Pay with Invoice' method.");
        setSuccess(null);
        return;
      }

      if (!details.phone.trim()) {
        setError("Phone Number is required for 'Pay with Invoice' method.");
        setSuccess(null);
        return;
      }

      if (!/^\d{10,15}$/.test(details.phone)) {
        setError("Please enter a valid phone number (10-15 digits).");
        setSuccess(null);
        return;
      }
    }

    setLoading(true);
    setError(null);

    const data = {
      fullname: details.fullName,
      phoneNumber: details.phone,
      email: details.email,
      quantity: details.numberOfAttendees,
    };

    const Course = {
      startDate:
        getMonthAndDay(classDetail.startDate) +
        ", " +
        getYear(classDetail.startDate),
      endDate:
        getMonthAndDay(classDetail.endDate) +
        ", " +
        getYear(classDetail.endDate),
      quantity: details.numberOfAttendees,
      price: subtotal,
      acronym: acronym,
    };

    const doc = (
      <InvoiceDocument
        data={data}
        selectedCourse={Course}
        isUk={country === "united kingdom"}
      />
    );
    const asPdf = pdf();

    asPdf.updateContainer(doc);

    const blob = await asPdf.toBlob();

    const fileName = `Invoice_ValueHut_${data.fullname}_${new Date().getTime()}.pdf`;

    const formData = new FormData();

    formData.append("file", blob, fileName);
    formData.append("toEmail", data.email);
    formData.append("subject", "ValueHut Consulting: Your Invoice");
    formData.append("text", "Please find attached your invoice.");
    formData.append("customerName", data.fullname);
    formData.append("courseName", course?.title ?? "");

    fetch("/api/sendEmail", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(
            "An error occurred while sending you an invoice. Please try again later!"
          );
          setSuccess(null);
        } else {
          setIsModalOpen(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(
          "An error occurred while sending you an email. Please try again later!"
        );
        setSuccess(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const combinedDate = `${getDisplayDate(classDetail.startDate, classDetail.endDate)}, ${classDetail.year}`;

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    router.push("/academy");
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="container pb-24 sm:pb-36">
        <div className="flex flex-col gap-6 pt-36 bg-white sm:bg-[#f5f5f5] p-4">
          <div className="flex justify-start items-start">
            <button
              className="py-1 px-[10px] bg-[#E4EEF3] rounded-full  flex gap-2 items-center"
              onClick={() => router.back()}
            >
              <Image
                src={"/less.svg"}
                width={20}
                height={20}
                alt="image"
                className="object-contain w-4 h-4"
              />
              <span className="text-main text-[15px] leading-[22px] font-secondary font-medium">
                Go back
              </span>
            </button>
          </div>

          <h1 className="text-[40px] leading-[52px] font-medium text-[#141834]">
            Checkout
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row  justify-between gap-3 ">
          <div className="w-full lg:w-[742px] flex flex-col gap-16 bg-white p-4 md:p-8 lg:rounded-3xl">
            <ContactInformation setDetails={setDetails} details={details} />
            <Paymentmethod
              methods={paymentMethods}
              details={details}
              setdetails={setDetails}
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
              amount={classPrice}
              country={country}
            />
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <CheckoutCourseDetails
              image={course.logo}
              title={course.title}
              date={combinedDate}
              time={classDetail.time}
              classType={classDetail.classType}
              country={country}
            />
            <div className="flex flex-col gap-3">
              <OrderSummary
                subtotal={subtotal}
                total={classPrice}
                quantity={details.numberOfAttendees}
                isUk={country === "united kingdom"}
              />
              {selectedMethod === "invoice" && (
                <Button
                  size="large"
                  bgColor="fill-brand-secondary"
                  className="rounded-xl text-main"
                  onClick={handlePayment}
                >
                  <span>{loading ? "Loading..." : "Send Invoice"}</span>
                </Button>
              )}
              {_errors || success ? (
                <p
                  className={`text-sm mt-6 text-center ${success ? "text-green-600" : ""} ${_errors ? "text-red-600" : ""}`}
                >
                  {_errors ?? success}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#03243266] bg-opacity-[40%] z-50">
          <div className="px-4 sm:px-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-10 bg-white rounded-[20px] px-4 py-8 md:p-8 w-full max-w-[645px]">
              <p>An email containing your invoice has been successfuly sent.</p>
              <p>
                To download your invoice, please check your email (
                {details.email})
              </p>
              <Button
                className="w-full text-sm font-medium font-secondary text-accentmain"
                bgColor="fill-neutral-strong"
                rounded="lg"
                onClick={handleModalToggle}
              >
                Ok
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WrapperCheckout;
