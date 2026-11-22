"use client";
import React, { useState } from "react";

interface DiscountCodeProps {
  onApply: (percent: number, code: string) => void;
  onRemove: () => void;
  appliedCode: string | null;
  discountPercent: number;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({
  onApply,
  onRemove,
  appliedCode,
  discountPercent,
}) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleApply = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/validate-discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: input.trim() }),
      });
      const data = await res.json();
      if (data.valid) {
        onApply(data.percent, data.code);
        setInput("");
        setOpen(false);
      } else {
        setError(data.error ?? "That code isn't valid.");
      }
    } catch {
      setError("We couldn't check that code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (appliedCode) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-lg bg-green-50 border border-green-200 px-4 py-3">
        <p className="text-sm font-medium font-secondary text-green-800">
          Code <span className="font-bold">{appliedCode}</span> applied —{" "}
          {discountPercent}% off
        </p>
        <button
          type="button"
          onClick={() => {
            setError(null);
            onRemove();
          }}
          className="text-sm font-medium font-secondary text-main underline hover:text-red-700"
        >
          Remove
        </button>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={false}
        className="self-start text-sm font-medium font-secondary text-[#05668D] underline hover:no-underline"
      >
        Have a discount code?
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="discountCode"
        className="text-sm font-medium font-secondary text-main"
      >
        Discount code
      </label>
      <div className="flex gap-2">
        <input
          id="discountCode"
          type="text"
          autoFocus
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleApply();
            }
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "discountCode-error" : undefined}
          className={`flex-1 min-w-0 rounded-lg border px-4 py-2 text-base font-secondary text-main focus:outline-none focus:ring-2 focus:ring-[#05668D] ${
            error ? "border-red-600" : "border-[#BFBFBF]"
          }`}
        />
        <button
          type="button"
          onClick={handleApply}
          disabled={loading || !input.trim()}
          className="px-4 py-2 bg-[#141834] text-white text-sm font-medium font-secondary rounded-lg disabled:opacity-50 hover:bg-[#05668D] transition-colors"
        >
          {loading ? "Checking…" : "Apply"}
        </button>
      </div>
      {error && (
        <p id="discountCode-error" className="text-sm text-red-600 font-secondary">
          {error}
        </p>
      )}
    </div>
  );
};

export default DiscountCode;
