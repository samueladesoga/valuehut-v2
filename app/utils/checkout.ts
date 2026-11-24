// Shared checkout maths and wording so the order summary, pay button,
// Stripe amount and invoice all agree on the same numbers.

import { primaryMarket, tertiaryMarket } from "@/data/Countries/countries";

export interface ClassPrices {
  ukPrice?: number | string;
  primary?: number | string;
  secondary?: number | string;
  tertiary?: number | string;
}

const lower = (list: string[]) => list.map((c) => c.toLowerCase());
const PRIMARY = lower(primaryMarket);
const TERTIARY = lower(tertiaryMarket);

/** Per-person price (before VAT) for a class, given the attendee's country. */
export function getUnitPriceForCountry(prices: ClassPrices | undefined, countryName: string): number {
  if (!prices) return 0;
  const country = countryName.toLowerCase();
  if (country === "united kingdom") return Number(prices.ukPrice) || 0;
  if (PRIMARY.includes(country)) return Number(prices.primary) || 0;
  if (TERTIARY.includes(country)) return Number(prices.tertiary) || 0;
  return Number(prices.secondary) || 0;
}

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

// Limits on what people can type into checkout fields. These values are
// printed on invoices sent from info@valuehut.co, so they're kept short and
// plain to stop the form being used to put messages or links on our invoices.
// The form and /api/send-invoice both use these rules.
export const FIELD_LIMITS = {
  fullName: 80,
  email: 254,
  company: 100,
  billingContact: 80,
  poNumber: 40,
  addressLine1: 100,
  addressLine2: 100,
  city: 60,
  postcode: 12,
  phone: 20,
  invoiceEmail: 254,
} as const;

export type LimitedField = keyof typeof FIELD_LIMITS;

// Letters (any language), numbers, spaces and the punctuation real names and
// addresses use. No @, colons, slashes-after-colons or line breaks.
const PLAIN_TEXT = /^[\p{L}\p{M}\p{N} .,'’&()/#-]*$/u;
const PO_TEXT = /^[A-Za-z0-9 ._/#-]*$/;
const POSTCODE_TEXT = /^[A-Za-z0-9 -]*$/;
const WEB_ADDRESS = /www\.|\bhttps?\b/i;

const PATTERNS: Partial<Record<LimitedField, RegExp>> = {
  fullName: PLAIN_TEXT,
  company: PLAIN_TEXT,
  billingContact: PLAIN_TEXT,
  addressLine1: PLAIN_TEXT,
  addressLine2: PLAIN_TEXT,
  city: PLAIN_TEXT,
  poNumber: PO_TEXT,
  postcode: POSTCODE_TEXT,
};

/** Error message for a free-text field, or null if it's fine. Expects a trimmed value. */
export function checkTextField(name: LimitedField, value: string): string | null {
  const max = FIELD_LIMITS[name];
  if (value.length > max) return `Use ${max} characters or fewer.`;
  const pattern = PATTERNS[name];
  if (!pattern) return null;
  if (!pattern.test(value)) {
    return name === "poNumber"
      ? "Use letters, numbers, spaces and - / . # _ only."
      : name === "postcode"
        ? "Use letters, numbers, spaces and hyphens only."
        : "Use letters, numbers and simple punctuation only.";
  }
  if (WEB_ADDRESS.test(value)) return "Web addresses can't go in this field.";
  return null;
}
