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
  const pageSEO = !noindex && ogType !== "article" && Object.hasOwn(PAGE_KEYS, slug)
    ? getPageSEO(PAGE_KEYS[slug], currentLangObj.code)
    : undefined;
  const resolvedTitle = pageSEO?.title || title;
  const resolvedDescription = pageSEO?.description || description;

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

    // Remove metadata and structured data owned by the previous route, including SSG.
    document.querySelectorAll(
      "script[data-seo-schema='true'], script[data-dynamic-seo='true'], " +
      "meta[property^='article:'], meta[property='og:locale:alternate'], " +
      "meta[property='og:image:width'], meta[property='og:image:height'], " +
      "meta[name='geo.position'], meta[name='ICBM'], " +
      "meta[name='twitter:site'], meta[name='twitter:creator']"
    ).forEach((element) => element.remove());

    // Standard Meta
    updateMeta("name", "description", resolvedDescription);
    updateMeta("name", "robots", robots);
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

    // Alternate locales for major markets (helps social/AI crawlers discover language variants)
    ["tr", "en", "de", "fr", "es", "it", "pt", "nl", "ru", "ar", "zh", "ja"]
      .filter((code) => code !== currentLangObj.code && OG_LOCALES[code])
      .forEach((code) => {
        const altLocale = document.createElement("meta");
        altLocale.setAttribute("property", "og:locale:alternate");
        altLocale.setAttribute("content", OG_LOCALES[code]);
        document.head.appendChild(altLocale);
      });

    // Article Specific OpenGraph Tags
    if (ogType === "article" && articleMeta) {
      if (articleMeta.publishedTime) {
        updateMeta("property", "article:published_time", articleMeta.publishedTime);
      }
      if (articleMeta.modifiedTime || articleMeta.publishedTime) {
        updateMeta("property", "article:modified_time", articleMeta.modifiedTime || articleMeta.publishedTime!);
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
    updateMeta("name", "twitter:title", resolvedTitle);
    updateMeta("name", "twitter:description", resolvedDescription);
    updateMeta("name", "twitter:image", absoluteOgImage);
    updateMeta("name", "twitter:image:alt", resolvedTitle);

    // Geographic Coordinates & Entity Origin (Local, Regional & Global Geotargeting)
    updateMeta("name", "geo.region", "TR-01");
    updateMeta("name", "geo.placename", "Adana, Türkiye");
    updateMeta("name", "geo.position", "36.9914;35.3308");
    updateMeta("name", "ICBM", "36.9914, 35.3308");
    updateMeta("name", "geo.coverage", "Worldwide; Global; European Union; Middle East; North Africa; Central Asia; Americas; Mediterranean Basin");
    updateMeta("name", "distribution", "Global");
    updateMeta("name", "coverage", "Worldwide");
    updateMeta("name", "target", "all");
    updateMeta("name", "audience", "all");
    updateMeta("name", "rating", "General");

    // Dublin Core Semantic Metadata
    updateMeta("name", "DC.title", resolvedTitle);
    updateMeta("name", "DC.creator", COMPANY_INFO.legalName);
    updateMeta("name", "DC.description", resolvedDescription);
    updateMeta("name", "DC.publisher", COMPANY_INFO.brandName);
    updateMeta("name", "DC.language", currentLangObj.code);
    updateMeta("name", "DC.coverage", "Worldwide; Adana, Türkiye; Mediterranean Basin; Global Export");
    updateMeta("name", "DC.type", "Product, Service");

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
        insertAnchor.after(altLink);
      } else {
        if (altLink.getAttribute("href") !== targetHref) {
          altLink.setAttribute("href", targetHref);
        }
      }
      insertAnchor = altLink;
    });

    // x-default
    handledHreflangs.add("x-default");
    let xDefaultLink = document.querySelector("link[rel='alternate'][hreflang='x-default']") as HTMLLinkElement;
    // x-default points to Turkish — the company's home market and default language.
    const defaultLanguage = availableLanguages.find((language) => language.code === "tr") || availableLanguages[0];
    const xDefaultHref = `${PRODUCTION_CANONICAL_HOST}${getCanonicalPath(defaultLanguage?.code || "tr", slug)}`;
    if (!xDefaultLink) {
      xDefaultLink = document.createElement("link");
      xDefaultLink.setAttribute("rel", "alternate");
      xDefaultLink.setAttribute("hreflang", "x-default");
      insertAnchor.after(xDefaultLink);
    } else {
      if (xDefaultLink.getAttribute("href") !== xDefaultHref) {
        xDefaultLink.setAttribute("href", xDefaultHref);
      }
    }

    // Remove any obsolete hreflangs (e.g. if a route supports fewer languages)
    document.querySelectorAll<HTMLLinkElement>("link[rel='alternate'][hreflang]").forEach((el) => {
      const hl = el.getAttribute("hreflang");
      if (hl && !handledHreflangs.has(hl)) {
        el.remove();
      }
    });

    // 6. Comprehensive Multi-Type Structured Data (JSON-LD)
    const jsonLdScripts: HTMLElement[] = [];

    // Organization and local business details shared with the site configuration.
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": ["Corporation", "Organization", "LocalBusiness", "Manufacturer"],
      "@id": `${PRODUCTION_CANONICAL_HOST}/#organization`,
      "name": COMPANY_INFO.brandName,
      "legalName": COMPANY_INFO.legalName,
      "url": PRODUCTION_CANONICAL_HOST,
      "image": `${PRODUCTION_CANONICAL_HOST}/images/arched-steel-hangar-hd.jpg`,
      "description": "International manufacturer of clear-span arch steel hangars, pre-engineered buildings (PEB) and industrial structural steel kits. Certified EN 1090-2 EXC4 and CE.",
      "slogan": COMPANY_INFO.tagline,
      "logo": {
        "@type": "ImageObject",
        "url": `${PRODUCTION_CANONICAL_HOST}/images/arched-steel-hangar-hd.jpg`,
        "width": 1200,
        "height": 630
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
      "priceRange": "$$$$",
      "currenciesAccepted": "USD, EUR, TRY, GBP, AED, SAR",
      "paymentAccepted": "Bank Wire, Letter of Credit (L/C)",
      "knowsAbout": [
        "Clear-Span Arch Steel Buildings",
        "Aircraft Hangars",
        "Pre-Engineered Buildings (PEB)",
        "Galvalume Plus AZ180",
        "EN 1090-2 Execution Class 4",
        "AISC 360-16 Structural Steel",
        "Container Canopy Roof Systems",
        "Bulk Agricultural Grain Storage"
      ],
      "hasCertification": COMPANY_INFO.certifications.map((c) => ({
        "@type": "Certification",
        "name": c.name,
        "description": c.scope
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "STRUCTIVA Industrial Steel Buildings & Hangars",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Q-Series Clear-Span Arch Hangar",
              "description": "Continuous semi-circular arch steel building from 9m to 45m clear span with zero internal columns. Galvalume Plus® AZ180 alloy.",
              "material": "Galvalume Plus® AZ180 Steel",
              "category": "Clear-Span Steel Buildings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "S-Series Straight-Wall Arch Steel Building",
              "description": "Vertical straight sidewalls with arch roof crown from 12m to 30m clear span. Ideal for pallet racking and logistics.",
              "material": "Galvalume Plus® AZ180 Steel",
              "category": "Industrial Warehouses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "P-Series Gable Pitch Steel Building",
              "description": "Traditional pitched gable roofline with arched steel engineering from 10m to 24m clear span.",
              "material": "Galvalume Plus® AZ180 Steel",
              "category": "Commercial Steel Buildings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Container Canopy Arch Roof System",
              "description": "Heavy-duty arch trusses mounted on ISO shipping containers from 8m to 20m clear span.",
              "material": "Galvanized High-Tensile Steel",
              "category": "Modular Shelter Systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Heavy Pre-Engineered Steel Building (PEB)",
              "description": "Tapered built-up portal frame structures up to 60m clear span with 50-ton overhead crane capacity.",
              "material": "Structural Steel Grade 50",
              "category": "Heavy Industrial Facilities"
            }
          }
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address.street,
        "addressLocality": COMPANY_INFO.address.city,
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
        { "@type": "Country", "name": "Netherlands" },
        { "@type": "Country", "name": "Poland" },
        { "@type": "Country", "name": "Romania" },
        { "@type": "Country", "name": "Greece" },
        { "@type": "Place", "name": "Middle East" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" },
        { "@type": "Country", "name": "Kuwait" },
        { "@type": "Country", "name": "Iraq" },
        { "@type": "Place", "name": "Central Asia" },
        { "@type": "Country", "name": "Azerbaijan" },
        { "@type": "Country", "name": "Kazakhstan" },
        { "@type": "Country", "name": "Uzbekistan" },
        { "@type": "Place", "name": "North Africa" },
        { "@type": "Country", "name": "Egypt" },
        { "@type": "Country", "name": "Algeria" },
        { "@type": "Country", "name": "Morocco" },
        { "@type": "Place", "name": "North America" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": COMPANY_INFO.contact.primaryPhone,
          "contactType": "sales",
          "email": COMPANY_INFO.contact.primaryEmail,
          "availableLanguage": [
            "Turkish", "English", "German", "French", "Spanish",
            "Arabic", "Russian", "Italian", "Portuguese", "Dutch",
            "Polish", "Azerbaijani", "Chinese", "Hindi"
          ]
        }
      ]
    };

    // WebSite schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${PRODUCTION_CANONICAL_HOST}/#website`,
      "url": PRODUCTION_CANONICAL_HOST,
      "name": COMPANY_INFO.brandName,
      "publisher": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` },
      "inLanguage": getSeoLanguages("").map((l) => l.hreflang)
    };

    // Speakable schema for voice search and AI generative engines
    const speakableSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#speakable`,
      "url": canonicalUrl,
      "name": resolvedTitle,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "header p", "main p:first-of-type"]
      },
      "inLanguage": currentLangObj.code
    };

    const schemasToInject: object[] = [orgSchema, websiteSchema, speakableSchema];

    // Article / TechArticle Schema
    if (ogType === "article") {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "headline": resolvedTitle,
        "description": resolvedDescription,
        "image": absoluteOgImage,
        "inLanguage": currentLangObj.code,
        "author": {
          "@type": "Organization",
          "name": COMPANY_INFO.brandName,
          "url": PRODUCTION_CANONICAL_HOST
        },
        "publisher": {
          "@id": `${PRODUCTION_CANONICAL_HOST}/#organization`
        },
        "datePublished": articleMeta?.publishedTime,
        "dateModified": articleMeta?.modifiedTime || articleMeta?.publishedTime,
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

    // Breadcrumbs schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((bc, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": bc.name,
          "item": bc.url.startsWith("http")
            ? bc.url
            : `${PRODUCTION_CANONICAL_HOST}${getCanonicalPath(currentLangObj.code, getPageSlug(bc.url))}`
        }))
      });
    }

    // Standard high-intent engineering FAQ items if none provided
    const effectiveFaqItems = faqItems && faqItems.length > 0 ? faqItems : [
      {
        question: currentLangObj.code === "tr"
          ? "STRUCTIVA çelik hangarları hangi açıklık ve rüzgar yükü değerlerine sahiptir?"
          : "What clear-span widths and wind loads do STRUCTIVA arch steel hangars support?",
        answer: currentLangObj.code === "tr"
          ? "STRUCTIVA kemerli çelik hangarları 9 metreden 45 metreye kadar iç kolonsuz net açıklıkla üretilir. Eurocode 3 ve AISC standartlarında 240 km/h rüzgar hızına ve 350 kg/m² kar yüküne dayanıklıdır."
          : "STRUCTIVA clear-span arch steel hangars are engineered from 9m to 45m without interior columns, certified under Eurocode 3 and AISC 360-16 for wind resistance up to 240 km/h and snow loads up to 350 kg/m²."
      },
      {
        question: currentLangObj.code === "tr"
          ? "Galvalume Plus® AZ180 kaplamanın geleneksel galvanizli çeliğe göre avantajı nedir?"
          : "What makes Galvalume Plus® AZ180 superior to standard galvanized steel?",
        answer: currentLangObj.code === "tr"
          ? "%55 Alüminyum, %43.4 Çinko ve %1.6 Silikon alaşımı (ASTM A792), standart galvanize göre 4-6 kat daha uzun korozyon ömrü sunar. 40-50 yıl bakım gerektirmez ve güneş ışınlarının %80'ini yansıtır."
          : "Galvalume Plus® AZ180 (55% Al, 43.4% Zn, 1.6% Si per ASTM A792) provides self-healing galvanic protection outlasting standard G90 galvanizing by 4 to 6 times, delivering 40-50 years of maintenance-free service with 80% solar heat reflectance."
      },
      {
        question: currentLangObj.code === "tr"
          ? "Uluslararası deniz aşırı sevkiyat nasıl yapılır?"
          : "How are STRUCTIVA steel building kits shipped internationally?",
        answer: currentLangObj.code === "tr"
          ? "Tüm yapılar Adana fabrikamızda 40HC deniz konteynerlerine flat-pack olarak yüklenir. Yaklaşık 350-400 m² bina tek bir konteynere sığar. Mersin Limanı'na 15 km mesafeden 50+ ülkeye sevk edilir."
          : "All building components are demountable and flat-packed into standard 40ft High-Cube (40HC) containers at our Adana facility (~350–400 m² per container) and dispatched worldwide via Mersin Deep-Water Port (15 km away)."
      }
    ];

    // FAQ schema
    schemasToInject.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": effectiveFaqItems.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });

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
  }, [resolvedTitle, resolvedDescription, canonicalUrl, currentLangObj, isRTL, absoluteOgImage, ogType, articleMeta, schema, faqItems, breadcrumbs, robots, noindex, slug]);

  return null;
}
