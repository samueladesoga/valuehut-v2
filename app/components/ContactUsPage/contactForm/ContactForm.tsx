"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent, useRef, FormEvent } from "react";
import Button from "@/components/Button/Button";
import emailjs from "@emailjs/browser";

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
  "w-full p-4 border text-sm border-[#bfbfbf] font-normal rounded-md text-main bg-white focus:outline-none focus:ring-2 focus:ring-[#05668D] focus:border-[#05668D] aria-[invalid=true]:border-red-600";

const MIN_MESSAGE_LENGTH = 20;

type FieldName = keyof FormData;
type Errors = Partial<Record<FieldName, string>>;

// Order of fields on the page, so focus goes to the first problem.
const FIELD_ORDER: FieldName[] = [
  "fullName",
  "email",
  "companyName",
  "interest",
  "focusArea",
  "engagementType",
  "message",
];
const labelClasses =
  "block font-primary font-medium text-lg !leading-[22.8px] mb-1";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_USER_ID;

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
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "failed">("idle");

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setStatus("idle");
    setErrors((prev) => {
      if (!prev[name as FieldName] && name !== "interest") return prev;
      const next = { ...prev };
      delete next[name as FieldName];
      if (name === "interest") {
        delete next.focusArea;
        delete next.engagementType;
      }
      return next;
    });

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

    const next: Errors = {};
    if (!fullName.trim()) next.fullName = "Enter your full name.";
    if (!email.trim()) next.email = "Enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter an email address like name@company.com.";
    if (!companyName.trim()) next.companyName = "Enter your company name.";
    if (!interest) next.interest = "Choose what you're looking for.";
    else if (interest !== "not-sure" && !focusArea)
      next.focusArea =
        interest === "talent-matching"
          ? "Choose the role you're hiring for."
          : interest === "academy"
            ? "Choose a training area."
            : "Choose a service.";
    if (interest === "talent-matching" && !engagementType)
      next.engagementType = "Choose an engagement type.";
    if (message.trim().length < MIN_MESSAGE_LENGTH)
      next.message = `Tell us a little more — at least ${MIN_MESSAGE_LENGTH} characters.`;

    setErrors(next);
    const first = FIELD_ORDER.find((f) => next[f]);
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured: set NEXT_PUBLIC_EMAIL_SERVICE_ID, NEXT_PUBLIC_EMAIL_TEMPLATE_ID and NEXT_PUBLIC_EMAIL_USER_ID at build time."
      );
      setStatus("failed");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(
        function () {
          setStatus("sent");
          setFormData(initialFormData);
          formRef.current?.reset();
        },
        (err: any) => {
          console.error("FAILED...", err);
          setStatus("failed");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1 font-secondary text-sm text-red-600">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      ref={formRef}
      onSubmit={handleSendEmail}
      noValidate
      className="bg-[#ffffff] rounded-xl"
    >
      <div className="p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-5xl font-primary font-medium mb-6">
          Send a message
        </h2>
        <p className="font-secondary text-sm text-secondary -mt-3 mb-6">
          All fields are required unless marked optional.
        </p>
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Full name"
              autoComplete="name"
            />
            {fieldError("fullName")}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="email" className={labelClasses}>
                Work email
              </label>
              <input
                type="email"
                id="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your email"
                autoComplete="email"
              />
              {fieldError("email")}
            </div>
            <div className="w-full">
              <label htmlFor="companyName" className={labelClasses}>
                Company name
              </label>
              <input
                type="text"
                id="companyName"
              aria-invalid={Boolean(errors.companyName)}
              aria-describedby={errors.companyName ? "companyName-error" : undefined}
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your company"
                autoComplete="organization"
              />
              {fieldError("companyName")}
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
              aria-invalid={Boolean(errors.interest)}
              aria-describedby={errors.interest ? "interest-error" : undefined}
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
            {fieldError("interest")}
          </div>

          {formData.interest === "consulting" && (
            <div>
              <label htmlFor="focusArea" className={labelClasses}>
                Which service are you interested in?
              </label>
              <select
                id="focusArea"
              aria-invalid={Boolean(errors.focusArea)}
              aria-describedby={errors.focusArea ? "focusArea-error" : undefined}
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
              {fieldError("focusArea")}
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
              aria-invalid={Boolean(errors.focusArea)}
              aria-describedby={errors.focusArea ? "focusArea-error" : undefined}
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
              {fieldError("focusArea")}
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
              aria-invalid={Boolean(errors.focusArea)}
              aria-describedby={errors.focusArea ? "focusArea-error" : undefined}
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
              {fieldError("focusArea")}
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
              aria-invalid={Boolean(errors.engagementType)}
              aria-describedby={errors.engagementType ? "engagementType-error" : undefined}
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
                  {fieldError("engagementType")}
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
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Tell us more about what you need"
              rows={4}
            ></textarea>
            <div className="flex justify-between gap-4 mt-1">
              <div className="flex-1">{fieldError("message")}</div>
              <p
                className={`font-secondary text-xs whitespace-nowrap ${
                  formData.message.trim().length >= MIN_MESSAGE_LENGTH ? "text-green-700" : "text-secondary"
                }`}
              >
                {formData.message.trim().length < MIN_MESSAGE_LENGTH
                  ? `${MIN_MESSAGE_LENGTH - formData.message.trim().length} more characters needed`
                  : "✓ Looks good"}
              </p>
            </div>
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
          <div aria-live="polite">
            {status === "sent" && (
              <p className="rounded-lg bg-green-50 border border-green-200 p-4 font-secondary text-sm text-green-800">
                Thanks — your message has been sent. We&apos;ll be in touch soon.
              </p>
            )}
            {status === "failed" && (
              <p role="alert" className="rounded-lg bg-red-50 border border-red-200 p-4 font-secondary text-sm text-red-700">
                Sorry, your message didn&apos;t send. Please try again, or email us directly at{" "}
                <a href="mailto:info@valuehut.co" className="underline">info@valuehut.co</a>.
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
