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

  // Clean canonical path
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
    updateMeta("property", "og:locale", currentLangObj.code === "tr" ? "tr_TR" : `${currentLangObj.code}_US`);
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", absoluteOgImage);

    // Geographic Coordinates & Origin (Crucial for Local & GEO Engine Grounding)
    updateMeta("name", "geo.region", "TR-01");
    updateMeta("name", "geo.placename", "Adana, Türkiye");
    updateMeta("name", "geo.position", "36.9914;35.3308");
    updateMeta("name", "ICBM", "36.9914, 35.3308");

    // 4. Update canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 5. Update bidirectional hreflang tags for all 30 languages
    const pathParts = cleanPath.split("/").filter(Boolean);
    const subPath = pathParts.length > 1 ? `/${pathParts.slice(1).join("/")}` : "";

    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());

    SUPPORTED_LANGUAGES.forEach((l) => {
      const altLink = document.createElement("link");
      altLink.setAttribute("rel", "alternate");
      altLink.setAttribute("hreflang", l.hreflang);
      altLink.setAttribute("href", `${PRODUCTION_CANONICAL_HOST}/${l.code}${subPath}`);
      document.head.appendChild(altLink);
    });

    const xDefaultLink = document.createElement("link");
    xDefaultLink.setAttribute("rel", "alternate");
    xDefaultLink.setAttribute("hreflang", "x-default");
    xDefaultLink.setAttribute("href", `${PRODUCTION_CANONICAL_HOST}/en${subPath}`);
    document.head.appendChild(xDefaultLink);

    // 6. Comprehensive Multi-Type Structured Data (JSON-LD)
    const jsonLdScripts: HTMLElement[] = [];

    // Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${PRODUCTION_CANONICAL_HOST}/#organization`,
      "name": COMPANY_INFO.brandName,
      "legalName": COMPANY_INFO.legalName,
      "url": PRODUCTION_CANONICAL_HOST,
      "logo": `${PRODUCTION_CANONICAL_HOST}/images/arched-steel-hangar-hd.jpg`,
      "image": `${PRODUCTION_CANONICAL_HOST}/images/arched-steel-hangar-hd.jpg`,
      "description": "International manufacturer of clear-span arch steel hangars, pre-engineered buildings (PEB) and industrial structural steel kits.",
      "foundingDate": `${COMPANY_INFO.establishedYear}`,
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
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address.street,
        "addressLocality": COMPANY_INFO.address.city,
        "postalCode": COMPANY_INFO.address.postalCode,
        "addressCountry": COMPANY_INFO.address.countryCode
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.9914",
        "longitude": "35.3308"
      },
      "hasMap": COMPANY_INFO.address.googleMapsUrl,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": COMPANY_INFO.contact.primaryPhone,
          "contactType": "sales",
          "email": COMPANY_INFO.contact.primaryEmail,
          "availableLanguage": ["Turkish", "English", "German", "Arabic", "Russian", "Spanish", "French"]
        }
      ]
    };

    // WebSite with SearchAction Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${PRODUCTION_CANONICAL_HOST}/#website`,
      "url": PRODUCTION_CANONICAL_HOST,
      "name": COMPANY_INFO.brandName,
      "publisher": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` },
      "inLanguage": SUPPORTED_LANGUAGES.map((l) => l.hreflang)
    };

    // Product Offering Schema for Core Building Series (GEO / AEO Citation Targeting)
    const productCatalogSchema = {
      "@context": "https://schema.org",
      "@type": "ProductModel",
      "name": "STRUCTIVA Q-Series Clear-Span Arch Steel Hangar",
      "brand": { "@type": "Brand", "name": "STRUCTIVA" },
      "manufacturer": { "@id": `${PRODUCTION_CANONICAL_HOST}/#organization` },
      "description": "Column-free arched steel building kit fabricated from Galvalume Plus® AZ180 alloy steel. Clear spans from 9m to 45m with 240 km/h wind resistance.",
      "category": "Industrial Steel Buildings / Hangars",
      "material": "Galvalume Plus® 55% Al-Zn Alloy Steel (ASTM A792)",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "offerCount": "50",
        "deliveryLeadTime": {
          "@type": "QuantitativeValue",
          "minValue": "2",
          "maxValue": "4",
          "unitCode": "WEE"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": ["TR", "US", "DE", "FR", "SA", "AE", "QA", "KZ", "AZ", "EG"]
          }
        }
      }
    };

    // HowTo Schema: How to Procure and Assemble a Structural Steel Building Kit
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Plan and Order an International Structural Steel Building Kit",
      "description": "Step-by-step engineering and procurement workflow for bolted clear-span steel buildings.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Determine Clear Span and Site Loading Criteria",
          "text": "Identify interior footprint, equipment clearances, and local statutory wind/snow load parameters."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Submit Project Requirements for 24h Engineering Review",
          "text": "Submit building span, length, and height through STRUCTIVA's 3D Configurator or RFQ technical brief."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Receive Static Feasibility, 3D Models and FOB/CIF Proposal",
          "text": "STRUCTIVA Adana engineers provide Eurocode/AISC static calculation, Bill of Materials (BOM), and container freight quotes."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Flat-Pack Ocean Freight Delivery & Bolt-Together Erection",
          "text": "Components arrive packed in 40HC containers for weld-free bolt assembly using provided 3D blueprint manuals."
        }
      ]
    };

    const schemasToInject: object[] = [orgSchema, websiteSchema, productCatalogSchema, howToSchema];

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
