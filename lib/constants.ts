export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "NxtAmzn";
export const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SLOGAN || "Spend less, enjoy more";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "An Amazon clone built with Next.js and MongoDB";

export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `Copyright © 2025 ${APP_NAME}. All rights reserved.`;

// We will show 9 items in Result Page
export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9);

// $35 is free minimum for free shipping.
export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35
);
