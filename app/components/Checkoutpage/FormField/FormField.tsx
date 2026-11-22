import React from "react";

export const inputClass = (hasError: boolean) =>
  `w-full py-3 px-4 rounded-lg border bg-white font-secondary text-base !leading-[24px] text-main placeholder:text-[#8A8D9F] focus:outline-none focus:ring-2 focus:ring-[#05668D] focus:border-[#05668D] ${
    hasError ? "border-red-600" : "border-[#BFBFBF]"
  }`;

interface FormFieldProps {
  id: string;
  label: string;
  optional?: boolean;
  hint?: React.ReactNode;
  error?: string;
  className?: string;
  children: (props: {
    id: string;
    className: string;
    "aria-invalid": boolean;
    "aria-describedby"?: string;
  }) => React.ReactNode;
}

/**
 * Label + control + hint + inline error, with the ARIA wiring done once.
 * Fields are required unless marked optional (the form says so at the top).
 */
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  optional,
  hint,
  error,
  className = "",
  children,
}) => {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id}
        className="text-sm !leading-[19px] font-medium font-secondary text-main"
      >
        {label}
        {optional && (
          <span className="font-normal text-secondary"> (optional)</span>
        )}
      </label>
      {children({
        id,
        className: inputClass(Boolean(error)),
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
      })}
      {error && (
        <p id={errorId} className="text-sm font-secondary text-red-600">
          {error}
        </p>
      )}
      {hint && (
        <p id={hintId} className="text-sm !leading-[19px] font-secondary text-secondary">
          {hint}
        </p>
      )}
    </div>
  );
};

export default FormField;
