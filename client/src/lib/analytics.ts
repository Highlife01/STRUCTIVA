/**
 * STRUCTIVA — Google Analytics 4 (GA4) & Conversion Tracking Utility
 * Measurement ID: G-Z9HQRTV47W
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface UtmParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  initial_landing?: string;
}

const UTM_STORAGE_KEY = "structiva_utm_session";

/**
 * Captures UTM parameters from current URL and preserves them for the session.
 */
export function captureAndStoreUtm(): UtmParameters {
  if (typeof window === "undefined") return {};

  try {
    const params = new URLSearchParams(window.location.search);
    const existingStr = sessionStorage.getItem(UTM_STORAGE_KEY);
    const existing: UtmParameters = existingStr ? JSON.parse(existingStr) : {};

    const freshUtm: UtmParameters = {
      utm_source: params.get("utm_source") || existing.utm_source,
      utm_medium: params.get("utm_medium") || existing.utm_medium,
      utm_campaign: params.get("utm_campaign") || existing.utm_campaign,
      utm_content: params.get("utm_content") || existing.utm_content,
      utm_term: params.get("utm_term") || existing.utm_term,
      initial_landing: existing.initial_landing || window.location.pathname,
    };

    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(freshUtm));
    return freshUtm;
  } catch (e) {
    return {};
  }
}

/**
 * Retrieves the stored session UTM parameters.
 */
export function getStoredUtm(): UtmParameters {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : captureAndStoreUtm();
  } catch (e) {
    return {};
  }
}

/**
 * Safe wrapper around window.gtag
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === "undefined") return;

  try {
    const utm = getStoredUtm();
    const payload = {
      ...utm,
      ...params,
      timestamp: new Date().toISOString(),
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...payload });
    }
  } catch (e) {
    // Non-blocking telemetry
  }
}

/**
 * High-value conversion: Verified Lead / Quote Request
 */
export function trackLeadSubmission(data: {
  quoteId?: string;
  source: "rfq" | "configurator" | "contact";
  model?: string;
  country?: string;
  areaM2?: number;
}): void {
  trackEvent("generate_lead", {
    value: data.areaM2 ? Math.round(data.areaM2 * 85) : 5000,
    currency: "USD",
    lead_source: data.source,
    quote_id: data.quoteId,
    model_id: data.model,
    country_destination: data.country,
    area_m2: data.areaM2,
  });
}

/**
 * Click to WhatsApp action
 */
export function trackWhatsAppClick(location: string, model?: string): void {
  trackEvent("contact_whatsapp", {
    click_location: location,
    model_interest: model || "general",
  });
}

/**
 * Click to Phone action
 */
export function trackPhoneClick(location: string): void {
  trackEvent("contact_phone", {
    click_location: location,
  });
}

/**
 * Digital Pre-Spec download / print
 */
export function trackSpecSheetAction(action: "print" | "whatsapp", model: string, areaM2: number): void {
  trackEvent("spec_sheet_interaction", {
    action_type: action,
    model_id: model,
    building_area: areaM2,
  });
}
