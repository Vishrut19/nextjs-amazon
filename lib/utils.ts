import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This function is used to format a number with two decimal places and return it as a string.
export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : int;
};

//This function is used to convert a string to a slug (which is generally a URL-friendly version of the text).
export const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
};

// Utility Function to Format Currency
const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
});
export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

// Utility Function to Format Number
const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");
export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}

// Utility Function to Round 2 deciaml points
export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

// Ulility Function to generate ID for Shopping Cart
export const generateId = () =>
  //It will generate 24 digit random number
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join("");
