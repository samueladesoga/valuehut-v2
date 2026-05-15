"use client";
import React, { useState } from "react";

interface DiscountCodeProps {
  onApply: (percent: number, code: string) => void;
  onRemove: () => void;
  appliedCode: string | null;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ onApply, onRemove, appliedCode }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleApply = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);

    const res = await fetch("/api/validate-discount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: input.trim() }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.valid) {
      onApply(data.percent, data.code);
      setInput("");
    } else {
      setError(data.error ?? "Invalid discount code");
    }
  };

  const handleRemove = () => {
    setError(null);
    setInput("");
    onRemove();
  };

  if (appliedCode) {
    return (
      <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3">
        <p className="text-sm font-medium font-secondary text-green-700">
          Discount code <span className="font-bold">{appliedCode}</span> applied
        </p>
        <button
          onClick={handleRemove}
          className="text-sm font-medium font-secondary text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(null); }}
          onKeyDown={(e) => e.key === "Enter" && handleApply()}
          placeholder="Discount code"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm font-secondary focus:outline-none focus:ring-2 focus:ring-[#05668D]"
        />
        <button
          onClick={handleApply}
          disabled={loading || !input.trim()}
          className="px-4 py-2 bg-[#141834] text-white text-sm font-medium font-secondary rounded-lg disabled:opacity-50 hover:bg-[#05668D] transition-colors"
        >
          {loading ? "Checking..." : "Apply"}
        </button>
      </div>
      {error && <p className="text-xs text-red-600 font-secondary">{error}</p>}
    </div>
  );
};

export default DiscountCode;
