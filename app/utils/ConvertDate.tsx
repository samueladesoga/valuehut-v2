import { DateTimeFormatOptions } from "intl";

type Options = {
  day: string;
  month: string;
  year: string;
};
export function convertDate(dateString: string) {
  const dateObj = new Date(dateString);

  const options: Options = { day: "2-digit", month: "short", year: "2-digit" };

  const formattedDate = dateObj.toLocaleDateString(
    "en-GB",
    options as DateTimeFormatOptions
  );

  const dayAdjustedDate = formattedDate.replace(/^\d+/, "22");

  return dayAdjustedDate;
}

export function getDay(dateInput: string): string {
  const date = new Date(dateInput);
  return date.getUTCDate().toString().padStart(2, "0");
}

export function getMonthAndDay(dateInput: string): string {
  const date = new Date(dateInput);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getUTCDate().toString().padStart(2, "0");
  return `${month} ${day}`;
}

export function getYear(dateInput: string): string {
  const date = new Date(dateInput);
  return date.getUTCFullYear().toString();
}

export const getDisplayDate = (startDate: string, endDate: string): string => {
  const parseDate = (date: string, referenceDate?: string): Date | null => {
    if (!date.includes(" ") && referenceDate) {
      const [month, year] = referenceDate.split(" ").slice(0, 2);
      const fullDate = `${month} ${date}, ${year}`;
      const parsedDate = new Date(fullDate);
      return isNaN(parsedDate.getTime()) ? null : parsedDate;
    }

    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate, startDate);

  if (!start) return "Date Unavailable";

  const startDay = start.getDate();
  const endDay = end?.getDate();

  if (startDay === endDay || !end) {
    return start.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  const formattedStart = start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const formattedEnd = end.toLocaleDateString("en-US", { day: "numeric" });

  return `${formattedStart} - ${formattedEnd}`;
};
