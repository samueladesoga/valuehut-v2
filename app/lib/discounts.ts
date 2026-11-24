// Discount codes live in the DISCOUNT_CODES env var as "CODE:PERCENT,CODE:PERCENT".
// Server-only: never import this from a client component.

export interface Discount {
  code: string;
  percent: number;
}

export function findDiscount(code: unknown): Discount | null {
  if (typeof code !== "string" || !code.trim()) return null;
  const wanted = code.trim().toUpperCase();

  const entries = (process.env.DISCOUNT_CODES ?? "").split(",").filter(Boolean);
  for (const entry of entries) {
    const [storedCode = "", percentStr = ""] = entry.trim().split(":");
    if (storedCode.trim().toUpperCase() !== wanted) continue;
    const percent = parseInt(percentStr, 10);
    if (!isNaN(percent) && percent > 0 && percent <= 100) {
      return { code: storedCode.trim().toUpperCase(), percent };
    }
  }
  return null;
}
