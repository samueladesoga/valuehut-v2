"use client";

import React, { useEffect, useRef } from "react";

interface ConfirmationModalProps {
  title: string;
  children: React.ReactNode;
  actionLabel: string;
  onAction: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  children,
  actionLabel,
  onAction,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#03243266] px-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
        className="w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-[20px] bg-white px-5 py-8 md:p-8 flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <span
            aria-hidden="true"
            className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl"
          >
            ✓
          </span>
          <h2
            id="confirmation-title"
            className="text-2xl !leading-[32px] font-semibold font-secondary text-[#141834]"
          >
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-4 font-secondary text-base !leading-[24px] text-main">
          {children}
        </div>
        <button
          ref={buttonRef}
          type="button"
          onClick={onAction}
          className="w-full rounded-xl bg-fill-brand-secondary text-main py-4 text-lg font-medium hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#05668D] focus:ring-offset-2"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
