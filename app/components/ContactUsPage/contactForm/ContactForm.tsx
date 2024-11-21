"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
              className="block text-sm font-secondary mb-1"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-4 border text-2xs border-gray-300 font-normal rounded-md font-primary"
              placeholder="Full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-primary mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border text-2xs border-gray-300 font-normal rounded-md font-secondary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-primary mb-1"
            >
              What are you interested in
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-4 border text-2xs border-gray-300 font-normal rounded-md font-secondary "
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
              className="block text-sm font-primary mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border text-2xs border-gray-300 font-normal rounded-md font-primary"
              placeholder="Write anything"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 px-4  bg- text-white font-primary text-sm rounded-md bg-fill-brand-secondary transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </form>
  );
};

export default ContactForm;
