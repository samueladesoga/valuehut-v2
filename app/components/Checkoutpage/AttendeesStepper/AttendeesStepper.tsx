"use client";

import React, { useEffect, useState } from "react";

const MIN = 1;
const MAX = 50;

interface AttendeesStepperProps {
  value: number;
  onChange: (value: number) => void;
  unitPriceLabel: string;
}

const clamp = (n: number) => Math.min(MAX, Math.max(MIN, n));

const AttendeesStepper: React.FC<AttendeesStepperProps> = ({
  value,
  onChange,
  unitPriceLabel,
}) => {
  // Keep the raw text while typing so clearing the box doesn't snap to 1.
  const [text, setText] = useState(String(value));
  useEffect(() => setText(String(value)), [value]);

  const commit = (raw: string) => {
    const parsed = parseInt(raw, 10);
    const next = Number.isNaN(parsed) ? value : clamp(parsed);
    onChange(next);
    setText(String(next));
  };

  const buttonClass =
    "w-11 h-11 flex items-center justify-center rounded-lg border border-[#BFBFBF] bg-white text-xl font-semibold text-main hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#05668D]";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="attendees"
        className="text-sm !leading-[19px] font-medium font-secondary text-main"
      >
        Number of attendees
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={buttonClass}
            onClick={() => onChange(clamp(value - 1))}
            disabled={value <= MIN}
            aria-label="Remove one attendee"
          >
            −
          </button>
          <input
            id="attendees"
            type="number"
            inputMode="numeric"
            min={MIN}
            max={MAX}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              const parsed = parseInt(e.target.value, 10);
              if (!Number.isNaN(parsed)) onChange(clamp(parsed));
            }}
            onBlur={(e) => commit(e.target.value)}
            className="w-16 h-11 text-center rounded-lg border border-[#BFBFBF] font-secondary text-lg font-semibold text-main focus:outline-none focus:ring-2 focus:ring-[#05668D] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            aria-describedby="attendees-hint"
          />
          <button
            type="button"
            className={buttonClass}
            onClick={() => onChange(clamp(value + 1))}
            disabled={value >= MAX}
            aria-label="Add one attendee"
          >
            +
          </button>
        </div>
        <p id="attendees-hint" className="text-sm font-secondary text-secondary">
          {unitPriceLabel} per attendee
        </p>
      </div>
    </div>
  );
};

export default AttendeesStepper;
