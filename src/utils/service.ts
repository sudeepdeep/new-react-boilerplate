import { urlPattern } from "./constants";

export function isValidURL(url: string): boolean {
  return urlPattern.test(url);
}
