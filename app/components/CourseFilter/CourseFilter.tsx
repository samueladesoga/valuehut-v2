"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CourseCard from "@/components/CourseCard/CourseCard";

interface CourseFilterProps {
  courses: any[];
}

const CourseFilter: React.FC<CourseFilterProps> = ({ courses }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialFilter = searchParams.get("filter") || "all";
  const [filter, setFilter] = useState(initialFilter);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "all", label: "All" },
    { value: "agile leadership", label: "Agile Leadership" },
    { value: "product management", label: "Product Management" },
    { value: "scrum", label: "Scrum" },
  ];

  useEffect(() => {
    setFilter(searchParams.get("filter") || "all");
  }, [searchParams]);

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter(
          (course) => course.level.toLowerCase() === filter.toLowerCase()
        );

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleFilterChange = (option: { value: string }) => {
    setFilter(option.value);
    setIsOpen(false);

    const params = new URLSearchParams(searchParams.toString());
    if (option.value === "all") {
      params.delete("filter");
    } else {
      params.set("filter", option.value);
    }

    router.push(`/academy?${params.toString()}`);
  };

  return (
    <div className="container bg-white lg:bg-inherit px-4 xl:px-0">
      <div className="relative inline-block text-left bg-white lg:bg-inherit">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 border rounded-full shadow-sm text-gray-700 border-gray-300 bg-white focus:outline-none hover:bg-gray-100"
        >
          <span className="mr-1 font-medium">
            Filter by:{" "}
            <span className="text-gray-900">
              {options.find((opt) => opt.value === filter)?.label}
            </span>
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
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange(option)}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    filter === option.value ? "font-bold" : ""
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

      <div className="container pt-[1px] lg:pt-5">
        <div className="flex flex-col gap-[2px]">
          {filteredCourses.map((course: any, index: React.Key) => (
            <div key={index}>
              <CourseCard
                title={course.title}
                description={course.description}
                level={course.level}
                duration={course.duration}
                dates={course.firstUnfilledClassDate}
                rating={course.rating}
                reviews={course.reviews}
                logo={course.logo}
                id={course.id}
                slug={course.slug || ""}
              />
            </div>
          ))}
          {filteredCourses.length === 0 && (
            <p className="text-center col-span-full text-gray-500">
              No courses found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
