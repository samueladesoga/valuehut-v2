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

export function getMonthAndDay(dateInput: string | Date, timeZone: string): string {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  if (isNaN(date.getTime())) throw new Error('Invalid date input');

  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    month: 'short',
    day: '2-digit',
  }).formatToParts(date);

  const month = parts.find(p => p.type === 'month')?.value ?? '';
  const day = parts.find(p => p.type === 'day')?.value ?? '';

  return `${month} ${day}`; // e.g., "Sep 16"
}

export function getYear(dateInput: string): string {
  const date = new Date(dateInput);
  return date.getUTCFullYear().toString();
}

function parseDate(date: string, timeZone: string, referenceDate?: string): Date | null {
  // If only day is provided (like "15")
  if (!date.includes(" ") && referenceDate) {
    // Try parsing the referenceDate into a real Date first
    const ref = new Date(referenceDate);

    if (isNaN(ref.getTime())) {
      return null; // invalid referenceDate
    }

    // Extract month and year safely
    const month = ref.toLocaleString("en-GB", { month: "long", timeZone: timeZone});
    const year = ref.getFullYear();

    // Construct a full date string
    const fullDate = `${month} ${date}, ${year}`;
    const parsed = new Date(fullDate);

    return isNaN(parsed.getTime()) ? null : parsed;
  }

  // Try parsing directly
  const parsed = new Date(date);
  return isNaN(parsed.getTime()) ? null : parsed;
};

export function getDisplayDate(startDate: string, endDate: string, timeZone: string): string {
  const start = parseDate(startDate, timeZone);
  const end = parseDate(endDate, timeZone);

  if (!start) return "Date Unavailable";

  const startDay = start.getDate();
  const endDay = end?.getDate();

  if (startDay === endDay || !end) {
    return start.toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: timeZone,
    });
  }

  const formattedStart = start.toLocaleDateString("en-GB", {
    day: "numeric",
    timeZone: timeZone,
  });
  const formattedEnd = end.toLocaleDateString("en-GB", { day: "numeric",  month: "short", year: "numeric", timeZone: timeZone });

  return `${formattedStart} - ${formattedEnd}`;
};

