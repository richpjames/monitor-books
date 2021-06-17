import { sanitize } from "dompurify";

export const sanitizeText = (text: string) => {
  let safeText;
  if (typeof window === "undefined") {
    safeText = text;
  } else {
    safeText = sanitize(text);
  }
  return safeText;
};
