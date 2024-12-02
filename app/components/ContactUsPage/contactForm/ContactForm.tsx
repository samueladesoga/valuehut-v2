"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/components/Button/Button";

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  fullName: string;
  email: string;
  interest: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#ffffff] rounded-xl">
      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-5xl font-primary font-medium mb-6">
          Send a message
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              value={formData.fullName}
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
              value={formData.email}
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
              What are you interested in
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-4 border text-sm border-[#bfbfbf] font-normal rounded-md text-secondary"
              required
            >
              <option value="">Choose options</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
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
              value={formData.message}
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
          >
            Send Message
          </Button>
        </form>
      </div>
    </form>
  );
};

export default ContactForm;
