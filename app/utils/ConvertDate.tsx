import { DateTimeFormatOptions } from 'intl';

type Options = {
  day: string;
  month: string;
  year: string;
};
export function convertDate(dateString: string) {
  const dateObj = new Date(dateString);

  const options: Options = { day: "2-digit", month: "short", year: "2-digit" };

  const formattedDate = dateObj.toLocaleDateString("en-GB", options as DateTimeFormatOptions);

  const dayAdjustedDate = formattedDate.replace(/^\d+/, "22");

  return dayAdjustedDate;
}
