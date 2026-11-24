// Server-side order pricing. Both card payments and invoices use this so the
// amount always comes from Contentful and DISCOUNT_CODES, never the browser.

import { getCourse } from "@/lib/courseApi";
import { findDiscount } from "@/lib/discounts";
import { CheckoutTotals, computeTotals, getUnitPriceForCountry } from "@/utils/checkout";

export const MAX_ATTENDEES = 50;

export interface OrderRequest {
  slug: unknown;
  classSysId: unknown;
  country: unknown;
  quantity: unknown;
  discountCode: unknown;
}

export interface PricedOrder {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  course: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classDetail: any;
  slug: string;
  classSysId: string;
  country: string;
  isUk: boolean;
  discountCode: string | null;
  totals: CheckoutTotals;
}

export type PriceResult = { ok: true; order: PricedOrder } | { ok: false; error: string };

export async function priceOrder(req: OrderRequest): Promise<PriceResult> {
  const { slug, classSysId, country, quantity, discountCode } = req;

  if (typeof slug !== "string" || typeof classSysId !== "string" || typeof country !== "string") {
    return { ok: false, error: "Invalid input data" };
  }
  if (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 1 || quantity > MAX_ATTENDEES) {
    return { ok: false, error: "Invalid number of attendees" };
  }

  const courses = await getCourse(slug).catch(() => null);
  const course = courses?.[0];
  const classDetail = course?.classes?.find(
    (cls: { classSysId: string }) => cls.classSysId === classSysId
  );
  if (!course || !classDetail) return { ok: false, error: "This class is no longer available" };
  if (classDetail.filled) return { ok: false, error: "This class is fully booked" };

  let discountPercent = 0;
  let appliedCode: string | null = null;
  if (discountCode) {
    const discount = findDiscount(discountCode);
    if (!discount) {
      return {
        ok: false,
        error: "Your discount code is no longer valid. Remove it and try again. You have not been charged.",
      };
    }
    discountPercent = discount.percent;
    appliedCode = discount.code;
  }

  const normalisedCountry = country.trim().toLowerCase();
  const isUk = normalisedCountry === "united kingdom";
  const unitPrice = getUnitPriceForCountry(classDetail, normalisedCountry);
  if (!unitPrice) return { ok: false, error: "No price is set for this class" };

  return {
    ok: true,
    order: {
      course,
      classDetail,
      slug,
      classSysId,
      country: normalisedCountry,
      isUk,
      discountCode: appliedCode,
      totals: computeTotals({ unitPrice, quantity, discountPercent, isUk }),
    },
  };
}
