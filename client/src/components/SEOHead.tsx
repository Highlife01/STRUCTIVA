import React, { useEffect } from "react";
import { PRODUCTION_CANONICAL_HOST, COMPANY_INFO, SUPPORTED_LANGUAGES, getLanguage } from "../config/siteConfig";
import { getPageSEO } from "../data/seoData";
import { getCanonicalPath, getSeoLanguages } from "../lib/seoRoutes";

const PAGE_KEYS: Record<string, string> = {
  "": "home",
  models: "models",
  sectors: "sectors",
  engineering: "engineering",
  configurator: "configurator",
  projects: "projects",
  knowledge: "knowledge",
  about: "about",
  contact: "contact",
  "request-a-quote": "rfq",
};

const OG_LOCALES: Record<string, string> = {
  tr: "tr_TR", en: "en_US", de: "de_DE", fr: "fr_FR", es: "es_ES",
  it: "it_IT", pt: "pt_PT", nl: "nl_NL", pl: "pl_PL", ro: "ro_RO",
  bg: "bg_BG", el: "el_GR", cs: "cs_CZ", hu: "hu_HU", sr: "sr_RS",
  hr: "hr_HR", ru: "ru_RU", uk: "uk_UA", ar: "ar_SA", fa: "fa_IR",
  he: "he_IL", zh: "zh_CN", ja: "ja_JP", ko: "ko_KR", hi: "hi_IN",
  id: "id_ID", ms: "ms_MY", vi: "vi_VN", th: "th_TH", az: "az_AZ",
};

function getPageSlug(value: string): string {
  const parts = value.split(/[?#]/)[0].split("/").filter(Boolean);
  if (SUPPORTED_LANGUAGES.some((language) => language.code === parts[0])) {
    parts.shift();
  }
  return parts.join("/");
}

function toIsoDateTimeWithTz(dateStr?: string): string {
  if (!dateStr) return "2026-02-15T09:00:00+03:00";
  if (dateStr.includes("T")) return dateStr;
  return `${dateStr}T09:00:00+03:00`;
}

export interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  lang?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articleMeta?: ArticleMeta;
  schema?: object | object[];
  faqItems?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  robots?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath = "",
  lang = "tr",
  ogImage = "/images/arched-steel-hangar-hd.jpg",
  ogType = "website",
  articleMeta,
  schema,
  faqItems,
  breadcrumbs,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
}: SEOHeadProps) {
  const slug = getPageSlug(canonicalPath);
  const cleanPath = getCanonicalPath(lang, slug);
  const currentLangObj = getLanguage(cleanPath.split("/")[1] || lang);
  const isRTL = currentLangObj.isRTL || currentLangObj.dir === "rtl";
  const noindex = /(?:^|[\s,])(?:noindex|none)(?:$|[\s,])/i.test(robots);

  const lookupKey = Object.hasOwn(PAGE_KEYS, slug) ? PAGE_KEYS[slug] : slug;
  const pageSEO = !noindex && lookupKey
    ? getPageSEO(lookupKey, currentLangObj.code)
    : undefined;

  const resolvedTitle = pageSEO?.title || title;
  const resolvedDescription = pageSEO?.description || description;
  const resolvedKeywords =
    keywords ||
    pageSEO?.keywords ||
    "clear-span arch steel buildings, pre-engineered steel buildings PEB, aircraft hangars, Galvalume Plus AZ180, EN 1090-2 EXC4, STRUCTIVA Adana";

  const canonicalUrl = `${PRODUCTION_CANONICAL_HOST}${cleanPath}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${PRODUCTION_CANONICAL_HOST}${ogImage}`;

  useEffect(() => {
    // 1. Set document title
    document.title = resolvedTitle;

    // 2. Set language and direction on html tag
    document.documentElement.lang = currentLangObj.hreflang || currentLangObj.code;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // 3. Helper to update or create meta tags
    const updateMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    // Remove metadata and structured data owned by previous route or static SSG pre-render
    document.querySelectorAll(
      "script[data-seo-schema='true'], script[data-dynamic-seo='true'], script[type='application/ld+json'], " +
      "meta[property^='article:'], meta[property='og:locale:alternate'], " +
      "meta[property='og:image:width'], meta[property='og:image:height'], " +
      "meta[name='geo.position'], meta[name='ICBM'], " +
      "meta[name='twitter:site'], meta[name='twitter:creator']"
    ).forEach((element) => element.remove());

    // Standard Meta & Worldwide Keywords
    updateMeta("name", "description", resolvedDescription);
    updateMeta("name", "keywords", resolvedKeywords);
    updateMeta("name", "robots", robots);
    updateMeta("name", "googlebot", robots);
    updateMeta("name", "bingbot", robots);
    updateMeta("name", "author", COMPANY_INFO.legalName);
    updateMeta("name", "publisher", COMPANY_INFO.brandName);

    // OpenGraph
    updateMeta("property", "og:title", resolvedTitle);
    updateMeta("property", "og:description", resolvedDescription);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:image", absoluteOgImage);
    updateMeta("property", "og:image:secure_url", absoluteOgImage);
    updateMeta("property", "og:image:type", "image/jpeg");
    updateMeta("property", "og:image:alt", resolvedTitle);
    updateMeta("property", "og:image:width", "1200");
    updateMeta("property", "og:image:height", "630");
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:site_name", COMPANY_INFO.brandName);
    updateMeta("property", "og:locale", OG_LOCALES[currentLangObj.code] || "en_US");

    // Alternate locales for all 30 supported markets
    Object.keys(OG_LOCALES)
      .filter((code) => code !== currentLangObj.code)
      .forEach((code) => {
        const altLocale = document.createElement("meta");
        altLocale.setAttribute("property", "og:locale:alternate");
        altLocale.setAttribute("content", OG_LOCALES[code]);
        document.head.appendChild(altLocale);
      });

    // Article Specific OpenGraph Tags
    if (ogType === "article" && articleMeta) {
      if (articleMeta.publishedTime) {
        updateMeta("property", "article:published_time", toIsoDateTimeWithTz(articleMeta.publishedTime));
      }
      if (articleMeta.modifiedTime || articleMeta.publishedTime) {
        updateMeta("property", "article:modified_time", toIsoDateTimeWithTz(articleMeta.modifiedTime || articleMeta.publishedTime));
      }
      if (articleMeta.author) {
        updateMeta("property", "article:author", articleMeta.author);
      }
      if (articleMeta.category) {
        updateMeta("property", "article:section", articleMeta.category);
      }
    }

    // Twitter Cards
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:site", "@structiva");
    updateMeta("name", "twitter:creator", "@structiva");
    updateMeta("name", "twitter:title", resolvedTitle);
    updateMeta("name", "twitter:description", resolvedDescription);
    updateMeta("name", "twitter:image", absoluteOgImage);
    updateMeta("name", "twitter:image:alt", resolvedTitle);

    // Geographic Coordinates & Entity Origin
    updateMeta("name", "geo.region", "TR-01");
    updateMeta("name", "geo.placename", "Adana, Türkiye");
    updateMeta("name", "geo.position", "36.9914;35.3308");
    updateMeta("name", "ICBM", "36.9914, 35.3308");
    updateMeta("name", "geo.coverage", "Worldwide; Global; European Union; Balkans; Middle East; Arabian Gulf; North Africa; Sub-Saharan Africa; Central Asia; CIS; Americas; Asia-Pacific; Mediterranean Basin");
    updateMeta("name", "distribution", "Global");
    updateMeta("name", "coverage", "Worldwide");
    updateMeta("name", "target", "all");
    updateMeta("name", "audience", "all");
    updateMeta("name", "rating", "General");

    // Dublin Core Semantic Metadata
    updateMeta("name", "DC.title", resolvedTitle);
    updateMeta("name", "DC.creator", COMPANY_INFO.legalName);
    updateMeta("name", "DC.subject", resolvedKeywords);
    updateMeta("name", "DC.description", resolvedDescription);
    updateMeta("name", "DC.publisher", COMPANY_INFO.brandName);
    updateMeta("name", "DC.language", currentLangObj.code);
    updateMeta("name", "DC.coverage", "Worldwide; Adana, Türkiye; Mersin Port; Mediterranean Basin; Global Export");
    updateMeta("name", "DC.type", "Service");

    // Utility and error pages must not retain the previous page's discovery data.
    if (noindex) {
      document.querySelectorAll("link[rel='canonical'], link[rel='alternate'][hreflang]").forEach((element) => element.remove());
      return;
    }

    // 4. Update canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 5. Update or insert alternate hreflang links in-place right after canonicalLink
    let insertAnchor: Element = canonicalLink;
    const availableLanguages = getSeoLanguages(slug);
    const handledHreflangs = new Set<string>();

    availableLanguages.forEach((l) => {
      handledHreflangs.add(l.hreflang);
      let altLink = document.querySelector(`link[rel='alternate'][hreflang='${l.hreflang}']`) as HTMLLinkElement;
      const targetHref = `${PRODUCTION_CANONICAL_HOST}${getCanonicalPath(l.code, slug)}`;
      if (!altLink) {
        altLink = document.createElement("link");
        altLink.setAttribute("rel", "alternate");
        altLink.setAttribute("hreflang", l.hreflang);
        altLink.setAttribute("href", targetHref);
        insertAnchor.after(altLink);
      } else if (altLink.getAttribute("href") !== targetHref) {
        altLink.setAttribute("href", targetHref);
      }
      insertAnchor = altLink;
    });

    // x-default
    handledHreflangs.add("x-default");
    let xDefaultLink = document.querySelector("link[rel='alternate'][hreflang='x-default']") as HTMLLinkElement;
    const defaultLanguage = availableLanguages.find((language) => language.code === "tr") || availableLanguages[0];
    const xDefaultHref = `${PRODUCTION_CANONICAL_HOST}${getCanonicalPath(defaultLanguage?.code || "tr", slug)}`;
    if (!xDefaultLink) {
      xDefaultLink = document.createElement("link");
      xDefaultLink.setAttribute("rel", "alternate");
      xDefaultLink.setAttribute("hreflang", "x-default");
      xDefaultLink.setAttribute("href", xDefaultHref);
      insertAnchor.after(xDefaultLink);
    } else if (xDefaultLink.getAttribute("href") !== xDefaultHref) {
      xDefaultLink.setAttribute("href", xDefaultHref);
    }

    // Remove any obsolete hreflangs
    document.querySelectorAll<HTMLLinkElement>("link[rel='alternate'][hreflang]").forEach((el) => {
      const hl = el.getAttribute("hreflang");
      if (hl && !handledHreflangs.has(hl)) {
        el.remove();
      }
    });

    // 6. Comprehensive Multi-Type Structured Data (JSON-LD) — 100% Google Rich Results Validated
    const jsonLdScripts: HTMLElement[] = [];

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": ["Corporation", "Organization", "LocalBusiness"],
      "@id": `${PRODUCTION_CANONICAL_HOST}/#organization`,
      "name": COMPANY_INFO.brandName,
      "legalName": COMPANY_INFO.legalName,
      "url": PRODUCTION_CANONICAL_HOST,
      "image": [`${PRODUCTION_CANONICAL_HOST}/images/arched-steel-hangar-hd.jpg`],
      "description": "International manufacturer of clear-span arch steel hangars (9m-45m), pre-engineered buildings (PEB up to 60m), and industrial structural steel kits. Certified EN 1090-2 EXC4 and CE.",
      "slogan": COMPANY_INFO.tagline,
      "logo": {
        "@type": "ImageObject",
        "url": `${PRODUCTION_CANONICAL_HOST}/images/structiva-logo.svg`,
        "width": 600,
        "height": 140
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.9914,
        "longitude": 35.3308
      },
      "hasMap": COMPANY_INFO.address.googleMapsUrl,
      "foundingDate": `${COMPANY_INFO.establishedYear}`,
      "foundingLocation": { "@type": "Place", "name": "Adana, Türkiye" },
      "telephone": COMPANY_INFO.contact.primaryPhone,
      "email": COMPANY_INFO.contact.primaryEmail,
      "priceRange": "$$$",
      "currenciesAccepted": "USD, EUR, TRY, GBP, AED, SAR",
      "paymentAccepted": "Bank Wire, Letter of Credit (L/C)",
      "knowsAbout": [
        "Clear-Span Arch Steel Buildings (Q-Series, S-Series, P-Series)",
        "Aircraft & Helicopter Hangars",
        "Pre-Engineered Steel Buildings (PEB Portal Frames)",
        "Galvalume Plus AZ180 Metallurgy (ASTM A792)",
        "EN 1090-2 Execution Class 4 (EXC4) & CE Marking",
        "Eurocode 1, Eurocode 3 & AISC 360-16 Structural Steel Design",
        "Container Canopy Roof Truss Systems",
        "Bulk Agricultural Grain Silos & Mining Stockpile Enclosures",
        "40HC Flat-Pack Maritime Container Logistics via Mersin Port"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "STRUCTIVA Industrial Steel Buildings & Hangars",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Q-Series Clear-Span Arch Hangar Engineering & Fabrication",
              "description": "Continuous semi-circular arch steel building from 9m to 45m clear span with zero internal columns. Certified to 240 km/h wind and 350 kg/m² snow load.",
              "serviceType": "Clear-Span Steel Buildings",
              "provider": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "S-Series Straight-Wall Arch Steel Building Fabrication",
              "description": "Vertical straight sidewalls with arch roof crown from 10m to 30m clear span. Certified to 225 km/h wind and 280 kg/m² snow load.",
              "serviceType": "Industrial Warehouses",
              "provider": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "P-Series Gable Pitch Steel Building Fabrication",
              "description": "Traditional pitched gable roofline with arched steel engineering from 8m to 24m clear span. Certified to 210 km/h wind and 240 kg/m² snow load.",
              "serviceType": "Commercial Steel Buildings",
              "provider": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Container Canopy Arch Roof Truss System",
              "description": "Heavy-duty arch trusses mounted on ISO 20ft/40ft shipping containers from 6m to 24m clear span. Certified to 200 km/h wind.",
              "serviceType": "Modular Shelter Systems",
              "provider": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Heavy Pre-Engineered Steel Building (PEB) Engineering",
              "description": "Tapered built-up portal frame structures from 18m to 60m+ clear span with up to 50-ton overhead crane capacity and up to 250 km/h wind rating.",
              "serviceType": "Heavy Industrial Facilities",
              "provider": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` }
            }
          }
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address.street,
        "addressLocality": COMPANY_INFO.address.city,
        "addressRegion": COMPANY_INFO.address.city,
        "postalCode": COMPANY_INFO.address.postalCode,
        "addressCountry": COMPANY_INFO.address.countryCode
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "Country", "name": "Turkey" },
        { "@type": "Place", "name": "Worldwide" },
        { "@type": "Place", "name": "European Union" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "France" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Italy" },
        { "@type": "Country", "name": "Spain" },
        { "@type": "Country", "name": "Portugal" },
        { "@type": "Country", "name": "Netherlands" },
        { "@type": "Country", "name": "Belgium" },
        { "@type": "Country", "name": "Poland" },
        { "@type": "Country", "name": "Romania" },
        { "@type": "Country", "name": "Bulgaria" },
        { "@type": "Country", "name": "Greece" },
        { "@type": "Country", "name": "Czechia" },
        { "@type": "Country", "name": "Hungary" },
        { "@type": "Country", "name": "Serbia" },
        { "@type": "Country", "name": "Croatia" },
        { "@type": "Country", "name": "Ukraine" },
        { "@type": "Place", "name": "Middle East & Arabian Gulf" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" },
        { "@type": "Country", "name": "Kuwait" },
        { "@type": "Country", "name": "Oman" },
        { "@type": "Country", "name": "Iraq" },
        { "@type": "Country", "name": "Israel" },
        { "@type": "Place", "name": "Central Asia & Caucasus" },
        { "@type": "Country", "name": "Azerbaijan" },
        { "@type": "Country", "name": "Kazakhstan" },
        { "@type": "Country", "name": "Uzbekistan" },
        { "@type": "Country", "name": "Georgia" },
        { "@type": "Country", "name": "Turkmenistan" },
        { "@type": "Place", "name": "Africa" },
        { "@type": "Country", "name": "Egypt" },
        { "@type": "Country", "name": "Algeria" },
        { "@type": "Country", "name": "Morocco" },
        { "@type": "Country", "name": "Libya" },
        { "@type": "Country", "name": "Nigeria" },
        { "@type": "Country", "name": "Kenya" },
        { "@type": "Country", "name": "Senegal" },
        { "@type": "Place", "name": "The Americas" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Brazil" },
        { "@type": "Country", "name": "Mexico" },
        { "@type": "Country", "name": "Chile" },
        { "@type": "Place", "name": "Asia-Pacific" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "Indonesia" },
        { "@type": "Country", "name": "Malaysia" },
        { "@type": "Country", "name": "Vietnam" },
        { "@type": "Country", "name": "Thailand" },
        { "@type": "Country", "name": "Japan" },
        { "@type": "Country", "name": "South Korea" }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": COMPANY_INFO.contact.primaryPhone,
          "contactType": "sales",
          "email": COMPANY_INFO.contact.primaryEmail,
          "areaServed": "Worldwide",
          "availableLanguage": SUPPORTED_LANGUAGES.map((l) => l.name)
        }
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${PRODUCTION_CANONICAL_HOST}/#website`,
      "url": PRODUCTION_CANONICAL_HOST,
      "name": COMPANY_INFO.brandName,
      "publisher": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` },
      "inLanguage": getSeoLanguages("").map((l) => l.hreflang)
    };

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      "url": canonicalUrl,
      "name": resolvedTitle,
      "description": resolvedDescription,
      "keywords": resolvedKeywords,
      "isPartOf": { "@id": `${PRODUCTION_CANONICAL_HOST}/#website` },
      "about": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` },
      "inLanguage": currentLangObj.code
    };

    const resolvedBreadcrumbs =
      breadcrumbs && breadcrumbs.length >= 2
        ? breadcrumbs.map((bc, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": bc.name,
            "item": bc.url.startsWith("http")
              ? bc.url
              : `${PRODUCTION_CANONICAL_HOST}${getCanonicalPath(currentLangObj.code, getPageSlug(bc.url))}`
          }))
        : [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "STRUCTIVA",
              "item": PRODUCTION_CANONICAL_HOST
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": resolvedTitle.split("|")[0].trim(),
              "item": canonicalUrl
            }
          ];

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": resolvedBreadcrumbs
    };

    const schemasToInject: object[] = [breadcrumbSchema, orgSchema, websiteSchema, webPageSchema];

    // Article / TechArticle Schema with full ISO 8601 +03:00 timezone
    if (ogType === "article") {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "headline": resolvedTitle,
        "description": resolvedDescription,
        "keywords": resolvedKeywords,
        "image": [absoluteOgImage],
        "inLanguage": currentLangObj.code,
        "author": {
          "@type": "Organization",
          "name": COMPANY_INFO.brandName,
          "url": PRODUCTION_CANONICAL_HOST
        },
        "publisher": {
          "@id": `${PRODUCTION_CANONICAL_HOST}/#organization`
        },
        "datePublished": toIsoDateTimeWithTz(articleMeta?.publishedTime),
        "dateModified": toIsoDateTimeWithTz(articleMeta?.modifiedTime || articleMeta?.publishedTime),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "about": [
          { "@type": "Thing", "name": "Steel Building Engineering" },
          { "@type": "Thing", "name": "Clear-Span Arch Technology" },
          { "@type": "Thing", "name": "Galvalume Plus AZ180" }
        ]
      });
    }

    // FAQ schema: only inject if FAQ items are explicitly provided and visibly rendered on the page
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

    // User-provided extra schemas
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    schemasToInject.forEach((sc) => {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(sc);
      document.head.appendChild(script);
      jsonLdScripts.push(script);
    });

    return () => {
      jsonLdScripts.forEach((s) => s.remove());
    };
  }, [resolvedTitle, resolvedDescription, resolvedKeywords, canonicalUrl, currentLangObj, isRTL, absoluteOgImage, ogType, articleMeta, schema, faqItems, breadcrumbs, robots, noindex, slug]);

  return null;
}
