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
    options as DateTimeFormatOptions,
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
