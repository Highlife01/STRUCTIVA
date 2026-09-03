import React, { useEffect } from "react";
import { PRODUCTION_CANONICAL_HOST, COMPANY_INFO, SUPPORTED_LANGUAGES, getLanguage } from "../config/siteConfig";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  lang?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: object | object[];
  faqItems?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEOHead({
  title,
  description,
  canonicalPath = "",
  lang = "tr",
  ogImage = "/images/arched-steel-hangar-hd.jpg",
  ogType = "website",
  schema,
  faqItems,
  breadcrumbs
}: SEOHeadProps) {
  const currentLangObj = getLanguage(lang);
  const isRTL = currentLangObj.isRTL || currentLangObj.dir === "rtl";

  // Clean canonical path (strip leading slash, ensure starts with /lang/)
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${PRODUCTION_CANONICAL_HOST}${cleanPath}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${PRODUCTION_CANONICAL_HOST}${ogImage}`;

  useEffect(() => {
    // 1. Set document title
    document.title = title;

    // 2. Set language and direction on html tag
    document.documentElement.lang = currentLangObj.hreflang || currentLangObj.code;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // 3. Helper to update or create meta tags
    const updateMeta = (nameAttr: string, nameVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    updateMeta("name", "description", description);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:image", absoluteOgImage);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:site_name", COMPANY_INFO.brandName);
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", absoluteOgImage);

    // 4. Update canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 5. Update bidirectional hreflang tags for all 30 languages
    // Path segment after the language code: e.g. /en/models -> subPath = /models
    const pathParts = cleanPath.split("/").filter(Boolean);
    const subPath = pathParts.length > 1 ? `/${pathParts.slice(1).join("/")}` : "";

    // Remove old hreflang alternates
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());

    // Inject all supported 30 languages
    SUPPORTED_LANGUAGES.forEach((l) => {
      const altLink = document.createElement("link");
      altLink.setAttribute("rel", "alternate");
      altLink.setAttribute("hreflang", l.hreflang);
      altLink.setAttribute("href", `${PRODUCTION_CANONICAL_HOST}/${l.code}${subPath}`);
      document.head.appendChild(altLink);
    });

    // x-default points to default language (/tr/ or /en/)
    const xDefaultLink = document.createElement("link");
    xDefaultLink.setAttribute("rel", "alternate");
    xDefaultLink.setAttribute("hreflang", "x-default");
    xDefaultLink.setAttribute("href", `${PRODUCTION_CANONICAL_HOST}/en${subPath}`);
    document.head.appendChild(xDefaultLink);

    // 6. Structured Data (JSON-LD)
    const jsonLdScripts: HTMLElement[] = [];
    const baseOrgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": COMPANY_INFO.brandName,
      "legalName": COMPANY_INFO.legalName,
      "url": PRODUCTION_CANONICAL_HOST,
      "logo": `${PRODUCTION_CANONICAL_HOST}/images/arched-steel-hangar-hd.jpg`,
      "description": "Engineered steel structures, pre-engineered buildings, clear-span arch hangars and turnkey structural steel manufacturing.",
      "foundingDate": `${COMPANY_INFO.establishedYear}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address.street,
        "addressLocality": COMPANY_INFO.address.city,
        "postalCode": COMPANY_INFO.address.postalCode,
        "addressCountry": COMPANY_INFO.address.countryCode
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": COMPANY_INFO.contact.primaryPhone,
          "contactType": "sales",
          "email": COMPANY_INFO.contact.primaryEmail,
          "availableLanguage": ["Turkish", "English", "German", "Arabic", "Russian"]
        }
      ]
    };

    const schemasToInject: object[] = [baseOrgSchema];

    // Optional breadcrumbs schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((bc, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": bc.name,
          "item": bc.url.startsWith("http") ? bc.url : `${PRODUCTION_CANONICAL_HOST}${bc.url}`
        }))
      });
    }

    // Optional FAQ schema
    if (faqItems && faqItems.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      });
    }

    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    // Clean previous dynamic json-ld
    document.querySelectorAll("script[data-dynamic-seo='true']").forEach((el) => el.remove());

    schemasToInject.forEach((sc) => {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-dynamic-seo", "true");
      script.textContent = JSON.stringify(sc);
      document.head.appendChild(script);
      jsonLdScripts.push(script);
    });

    return () => {
      jsonLdScripts.forEach((s) => s.remove());
    };
  }, [title, description, canonicalUrl, currentLangObj, isRTL, absoluteOgImage, ogType, schema, faqItems, breadcrumbs]);

  return null;
}
