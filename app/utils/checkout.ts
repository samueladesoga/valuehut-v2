// Shared checkout maths and wording so the order summary, pay button,
// Stripe amount and invoice all agree on the same numbers.

export const UK_VAT_RATE = 0.2;
export const INVOICE_PAYMENT_DAYS_BEFORE_CLASS = 14;

export interface CheckoutTotals {
  unitPrice: number;
  quantity: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  /** Subtotal after discount, before VAT. This is what the payment API expects. */
  net: number;
  vat: number;
  total: number;
  /** Total in the smallest currency unit (pence / cents). */
  totalMinor: number;
  currency: "gbp" | "usd";
}

export function computeTotals({
  unitPrice,
  quantity,
  discountPercent = 0,
  isUk,
}: {
  unitPrice: number;
  quantity: number;
  discountPercent?: number;
  isUk: boolean;
}): CheckoutTotals {
  const subtotal = unitPrice * quantity;
  const discountAmount = subtotal * (discountPercent / 100);
  const net = subtotal - discountAmount;
  const vat = isUk ? net * UK_VAT_RATE : 0;
  // Same rounding the payment-intent API applies, so the button and the charge match.
  const totalMinor = Math.round(net * (isUk ? 1 + UK_VAT_RATE : 1) * 100);
  return {
    unitPrice,
    quantity,
    subtotal,
    discountPercent,
    discountAmount,
    net,
    vat,
    total: totalMinor / 100,
    totalMinor,
    currency: isUk ? "gbp" : "usd",
  };
}

export function formatMoney(amount: number, isUk: boolean): string {
  return new Intl.NumberFormat(isUk ? "en-GB" : "en-US", {
    style: "currency",
    currency: isUk ? "GBP" : "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export interface InvoiceDeadline {
  /** e.g. "3 January 2027", or null if the class start date can't be read. */
  label: string | null;
  /** Due date for the invoice PDF in dd/mm/yyyy (today if the deadline has passed). */
  dueDateShort: string;
  /** True when the class starts in fewer than 14 days, so payment is due now. */
  isPastDeadline: boolean;
}

function formatInZone(date: Date, timeZone: string | undefined, options: Intl.DateTimeFormatOptions) {
  try {
    return date.toLocaleDateString("en-GB", { ...options, timeZone });
  } catch {
    return date.toLocaleDateString("en-GB", options);
  }
}

export function getInvoiceDeadline(startDate: string | undefined, timeZone?: string): InvoiceDeadline {
  const now = new Date();
  const todayShort = formatInZone(now, timeZone, {});
  const start = startDate ? new Date(startDate) : null;
  if (!start || isNaN(start.getTime())) {
    return { label: null, dueDateShort: todayShort, isPastDeadline: false };
  }
  const deadline = new Date(start.getTime() - INVOICE_PAYMENT_DAYS_BEFORE_CLASS * 24 * 60 * 60 * 1000);
  const isPastDeadline = deadline.getTime() <= now.getTime();
  return {
    label: formatInZone(deadline, timeZone, { day: "numeric", month: "long", year: "numeric" }),
    dueDateShort: isPastDeadline ? todayShort : formatInZone(deadline, timeZone, {}),
    isPastDeadline,
  };
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Accepts the way people really type numbers: "+44 7700 900123", "(555) 123-4567". */
export function isValidPhone(value: string): boolean {
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
