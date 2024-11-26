"use client"
import React, { useState } from "react";

type Option = {
  value: string;
  label: string;
};

type ChangeHandler = (option: Option) => void;

interface FilterDropdownProps {
  options: Option[];
  onChange: ChangeHandler;
}

const FilterDropdown = ({ options, onChange }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left bg-white lg:bg-inherit">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 border rounded-full shadow-sm text-gray-700 border-gray-300 bg-white focus:outline-none hover:bg-gray-100"
      >
        <span className="mr-1 font-medium">
          Filter by: <span className="text-gray-900">{selectedOption.label}</span>
        </span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {options.map((option: Option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  selectedOption.value === option.value ? "font-bold" : ""
                }`}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default FilterDropdown