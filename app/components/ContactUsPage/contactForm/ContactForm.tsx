"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent, useRef, FormEvent } from "react";
import Button from "@/components/Button/Button";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  interest: string;
  focusArea: string;
  engagementType: string;
  groupSize: string;
  timeline: string;
  message: string;
}

const CONSULTING_SERVICES = [
  "Team Bootstrap",
  "Delivery Management",
  "Product Delivery",
  "Continuous Delivery",
  "Test Strategy & Automation",
  "Enterprise and Team Coaching",
  "Not sure – help me choose",
];

const ACADEMY_AREAS = [
  "Agile Leadership",
  "Product Management",
  "Product Delivery with Scrum",
  "Not sure – recommend a course",
];

const TALENT_ROLES = [
  "Scrum Master",
  "Product Manager",
  "Delivery Manager",
  "Business Analyst",
  "Developer / Software Engineer",
  "QA Engineer",
  "DevOps Engineer",
  "Designer / UX Researcher",
  "Tech Lead / Team Lead",
  "Data Scientist / AI Specialist",
  "Other",
];

const ENGAGEMENT_TYPES = ["Permanent", "Contract", "Interim"];

const TIMELINE_OPTIONS = ["ASAP", "1–3 months", "3–6 months", "Just researching"];

const inputClasses =
  "w-full p-4 border text-sm border-[#bfbfbf] font-normal rounded-md text-secondary";
const labelClasses =
  "block font-primary font-medium text-lg !leading-[22.8px] mb-1";

emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAIL_USER_ID });

const initialFormData: FormData = {
  fullName: "",
  email: "",
  companyName: "",
  phone: "",
  interest: "",
  focusArea: "",
  engagementType: "",
  groupSize: "",
  timeline: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "interest") {
      setFormData((prevState) => ({
        ...prevState,
        interest: value,
        focusArea: "",
        engagementType: "",
        groupSize: "",
      }));
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      fullName,
      email,
      companyName,
      interest,
      focusArea,
      engagementType,
      message,
    } = formData;

    if (!fullName || !email || !companyName || !interest || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (interest !== "not-sure" && !focusArea) {
      toast.error("Please let us know which service you're interested in.");
      return;
    }

    if (interest === "talent-matching" && !engagementType) {
      toast.error("Please select an engagement type.");
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
        formRef.current as HTMLFormElement
      )
      .then(
        function () {
          toast.success("Email has been sent successfully!");
          setFormData(initialFormData);
          formRef.current?.reset();
        },
        (err: any) => {
          console.error("FAILED...", err);
          toast.error("Failed to send email. Please try again.");
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
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-5xl font-primary font-medium mb-6">
          Send a message
        </h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Full name"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="email" className={labelClasses}>
                Work email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="companyName" className={labelClasses}>
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your company"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone number{" "}
              <span className="text-secondary font-normal text-sm">
                (optional)
              </span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="interest" className={labelClasses}>
              What are you looking for?
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={inputClasses}
              required
            >
              <option value="">Select an option</option>
              <option value="consulting">Consulting</option>
              <option value="academy">Academy (Training)</option>
              <option value="talent-matching">Talent Matching</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>

          {formData.interest === "consulting" && (
            <div>
              <label htmlFor="focusArea" className={labelClasses}>
                Which service are you interested in?
              </label>
              <select
                id="focusArea"
                name="focusArea"
                value={formData.focusArea}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="">Select a service</option>
                {CONSULTING_SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          )}

          {formData.interest === "academy" && (
            <>
              <div>
                <label htmlFor="focusArea" className={labelClasses}>
                  Which training area interests you?
                </label>
                <select
                  id="focusArea"
                  name="focusArea"
                  value={formData.focusArea}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                >
                  <option value="">Select a training area</option>
                  {ACADEMY_AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="groupSize" className={labelClasses}>
                  How many people would you like to train?{" "}
                  <span className="text-secondary font-normal text-sm">
                    (optional)
                  </span>
                </label>
                <input
                  type="number"
                  min={1}
                  id="groupSize"
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Number of attendees"
                />
              </div>
            </>
          )}

          {formData.interest === "talent-matching" && (
            <>
              <div>
                <label htmlFor="focusArea" className={labelClasses}>
                  What role(s) are you hiring for?
                </label>
                <select
                  id="focusArea"
                  name="focusArea"
                  value={formData.focusArea}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                >
                  <option value="">Select a role</option>
                  {TALENT_ROLES.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                  <label
                    htmlFor="engagementType"
                    className={`${labelClasses} sm:min-h-[46px]`}
                  >
                    Engagement type
                  </label>
                  <select
                    id="engagementType"
                    name="engagementType"
                    value={formData.engagementType}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select engagement type</option>
                    {ENGAGEMENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="groupSize"
                    className={`${labelClasses} sm:min-h-[46px]`}
                  >
                    How many positions?{" "}
                    <span className="text-secondary font-normal text-sm">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Number of positions"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label htmlFor="timeline" className={labelClasses}>
              When are you looking to get started?{" "}
              <span className="text-secondary font-normal text-sm">
                (optional)
              </span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select a timeframe</option>
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Tell us more about what you need"
              rows={4}
              required
            ></textarea>
          </div>
          <Button
            bgColor="bg-fill-brand-secondary"
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
