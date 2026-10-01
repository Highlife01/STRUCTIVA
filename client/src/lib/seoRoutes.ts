/**
 * STRUCTIVA — SEO Route Helpers
 * Canonical path and alternate language resolution for all 30 languages.
 */

import { SUPPORTED_LANGUAGES, LanguageDef } from "../config/siteConfig";

/**
 * Returns the canonical path for a language and page slug.
 * E.g. getCanonicalPath("en", "models") -> "/en/models"
 *      getCanonicalPath("tr", "") -> "/tr"
 */
export function getCanonicalPath(lang: string, slug: string = ""): string {
  const cleanLang = (lang || "tr").toLowerCase().split("-")[0];
  const cleanSlug = slug.replace(/^\/+/, "").replace(/\/+$/, "");

  if (!cleanSlug) {
    return `/${cleanLang}`;
  }

  return `/${cleanLang}/${cleanSlug}`;
}

/**
 * Returns the list of supported languages for SEO hreflang generation.
 * Supports all 30 languages.
 */
export function getSeoLanguages(slug?: string): LanguageDef[] {
  return SUPPORTED_LANGUAGES;
}
