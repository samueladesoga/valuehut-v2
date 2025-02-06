export function convertDate(dateString: string | number | Date) {
  const date = new Date(dateString);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear().toString().slice(-2);

  return `${day.toString().padStart(2, "0")} ${month} ${year}`;
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
