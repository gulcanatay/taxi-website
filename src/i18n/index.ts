import { de } from "./locales/de";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import type { Translations } from "./types";

export const locales = { de, en, fr } as const;
export type Locale = keyof typeof locales;
export const defaultLocale: Locale = "de";

export function getTranslations(locale: Locale): Translations {
  return locales[locale];
}

export function localePath(locale: Locale, path: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const result = `${prefix}/${path}`.replace(/\/+/g, "/").replace(/\/$/, "");
  return result || "/";
}

export function getAlternateUrls(
  pageKey: keyof Translations["routes"]
): Record<Locale, string> {
  return Object.fromEntries(
    Object.entries(locales).map(([loc, t]) => [
      loc,
      localePath(loc as Locale, t.routes[pageKey]),
    ])
  ) as Record<Locale, string>;
}
