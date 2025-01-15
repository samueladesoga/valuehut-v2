/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

interface Props {
  amount: number;
  country: string;
  fullName: string;
  email: string;
  acronym?: string;
  startDate?: string;
}

const PaymentWithCredit: React.FC<Props> = ({
  amount,
  country,
  fullName,
  email,
  acronym,
  startDate,
}) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (email && fullName && validateEmail(email)) {
      setLoading(true);
      setErrorMessage("");
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: country === "united kingdom" ? "gbp" : "usd",
          email,
          fullName,
          isUk: country === "united kingdom",
          acronym,
          startDate,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          } else {
            setErrorMessage(data.error || "Failed to initialize payment");
          }
        })
        .catch(() => {
          setLoading(false);
          setErrorMessage("Error connecting to the server");
        });
    } else {
      setLoading(false);
      setErrorMessage("Full Name and valid Email are required.");
    }
  }, [amount, country, email, fullName, acronym, startDate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !fullName || !validateEmail(email)) {
      setErrorMessage(
        "Please ensure all fields are correctly filled and the email is valid."
      );
      return;
    }
    setLoading(true);
    setErrorMessage("");
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }
    const { error: submitError }: any = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
    const { error, paymentIntent }: any = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setPaymentSuccess(true);
      setLoading(false);
    }

    if (submitError) {
      setErrorMessage(submitError.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setPaymentSuccess(true);
    } else {
      setErrorMessage("Payment failed to process. Please try again.");
    }
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRedirect = () => {
    setPaymentSuccess(false);
    router.push("/academy");
  };

  const handleCardDetailsChange = (event: any) => {
    if (event.error) {
      setErrorMessage(event.error.message);
    } else {
      setErrorMessage("");
    }
  };
  if (!clientSecret || !stripe || !elements) {
    if (loading) {
      return (
        <div className="flex items-center justify-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      );
    }
    return (
      <div className="text-red-500 text-center">
        {errorMessage || "Please fill in all required fields to proceed."}
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {clientSecret && (
          <PaymentElement
            options={{
              layout: {
                type: "tabs",
                defaultCollapsed: false,
                spacedAccordionItems: false,
              },
            }}
            onChange={handleCardDetailsChange}
          />
        )}
        {errorMessage && (
          <div className="text-red-500 text-center text-sm mt-2">
            {errorMessage}
          </div>
        )}
        {clientSecret && (
          <Button
            size="large"
            bgColor="fill-brand-secondary"
            className="rounded-xl text-main w-full mt-4"
            disabled={loading}
          >
            {!loading
              ? `Pay ${country === "united kingdom" ? `£${amount + amount * 0.2}` : `$${amount}`}`
              : "Processing..."}
          </Button>
        )}
      </form>

      {paymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Thank you!</h2>
            <p className="text-center mb-6">
              Your payment was successful. We will send you an email with more
              information within 24 hours.
            </p>
            <Button
              size="large"
              bgColor="fill-brand-secondary"
              className="rounded-xl text-main w-full"
              onClick={handleRedirect}
            >
              Back to Academy Homepage
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentWithCredit;
