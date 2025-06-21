"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent, useRef, FormEvent } from "react";
import Button from "@/components/Button/Button";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";


interface FormData {
  fullName: string;
  email: string;
  interest: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    interest: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, email, interest, message } = formData;

    if (!fullName || !email || !interest || !message) {
        toast.error("All fields are required!");
      return;
    }

    if (message.length < 20) {
        toast.error("Message must be at least 20 characters long.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID as string
      )
      .then(      
        function () {
        if (typeof window !== "undefined") {
            toast.success("Email has been sent successfully!");
        }
        setFormData({
          fullName: "",
          email: "",
          interest: "",
          message: "",
        });
        formRef.current?.reset();
      },
        (err: any) => {
          console.error("FAILED...", err);
          if (typeof window !== "undefined") {
              toast.error("Failed to send email. Please try again.");
          }
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSendEmail}
      className="bg-[#ffffff] rounded-xl"
    >
      <div><Toaster position="top-center" reverseOrder={false}/></div>
      <div className="p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-5xl font-primary font-medium mb-6">
          Send a message
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block font-medium font-primary text-lg !leading-[22.8px] mb-1"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              className="w-full p-4 border text-sm border-[#bfbfbf] font-normal rounded-md text-secondary"
              placeholder="Full name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-primary font-medium text-lg !leading-[22.8px] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full p-4 border text-sm border-[#bfbfbf] font-normal rounded-md text-secondary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="interest"
              className="block font-primary font-medium text-lg !leading-[22.8px] mb-1"
            >
              What are you interested in?
            </label>
            <select
              id="interest"
              name="interest"
              onChange={handleChange}
              className="w-full p-4 border text-sm border-[#bfbfbf] font-normal rounded-md text-secondary"
              required
            >
              <option value="">Select a service</option>
              <option value="academy">Academy</option>
              <option value="consulting">Consulting</option>
              <option value="talent-matching">Talent Matching</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-primary font-medium text-lg !leading-[22.8px] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              className="w-full p-4 border text-sm border-[#bfbfbf] font-normal rounded-md text-secondary"
              placeholder="Write anything"
              rows={4}
              required
            ></textarea>
          </div>
          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            rounded="lg"
            className="w-full !text-sm"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
