import { db } from "../lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  type Unsubscribe,
} from "firebase/firestore";

export type InquiryType = "quote" | "contact";
export type InquirySource = "contact" | "rfq" | "configurator";
export type InquiryStatus = "new" | "contacted" | "quoted" | "archived";

export interface Inquiry {
  id: string;
  type: InquiryType;
  source?: InquirySource;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country: string;
  model?: string;
  span?: number;
  length?: number;
  height?: number;
  areaM2?: number;
  accessories?: string[];
  message: string;
  status: InquiryStatus;
  adminNote?: string;
  createdAt: string;
  statusUpdatedAt?: string;
  noteUpdatedAt?: string;
  followUpAt?: string;
  followUpUpdatedAt?: string;
}

const COLLECTION = "inquiries";
const STATUSES: InquiryStatus[] = ["new", "contacted", "quoted", "archived"];

function asStatus(value: unknown): InquiryStatus {
  return STATUSES.includes(value as InquiryStatus) ? (value as InquiryStatus) : "new";
}

function asType(value: unknown): InquiryType {
  return value === "contact" ? "contact" : "quote";
}

function asSource(value: unknown, type: InquiryType): InquirySource | undefined {
  if (value === "contact" || value === "rfq" || value === "configurator") return value;
  return type === "contact" ? "contact" : undefined;
}

function toIso(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "object" && value !== null && "toDate" in value) {
    const toDate = (value as { toDate?: () => Date }).toDate;
    if (typeof toDate === "function") {
      try {
        return toDate.call(value).toISOString();
      } catch {
        return "";
      }
    }
  }
  if (typeof value === "object" && value !== null && "seconds" in value) {
    const seconds = (value as { seconds?: number }).seconds;
    if (typeof seconds === "number") return new Date(seconds * 1000).toISOString();
  }
  return "";
}

function asNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() && Number.isFinite(Number(value))) return Number(value);
  return undefined;
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function asStringList(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const list = value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  return list.length ? list : undefined;
}

export function mapInquiry(id: string, raw: Record<string, unknown>): Inquiry {
  const type = asType(raw.type);
  const createdAt = toIso(raw.createdAt) || toIso(raw.timestamp);
  return {
    id,
    type,
    source: asSource(raw.source, type),
    name: asString(raw.name) || "İsimsiz başvuru",
    email: asString(raw.email) || "",
    phone: asString(raw.phone),
    company: asString(raw.company),
    country: asString(raw.country) || "Belirtilmedi",
    model: asString(raw.model),
    span: asNumber(raw.span),
    length: asNumber(raw.length),
    height: asNumber(raw.height),
    areaM2: asNumber(raw.areaM2),
    accessories: asStringList(raw.accessories),
    message: typeof raw.message === "string" ? raw.message : "",
    status: asStatus(raw.status),
    adminNote: asString(raw.adminNote),
    createdAt,
    statusUpdatedAt: toIso(raw.statusUpdatedAt) || undefined,
    noteUpdatedAt: toIso(raw.noteUpdatedAt) || undefined,
    followUpAt: toIso(raw.followUpAt) || undefined,
    followUpUpdatedAt: toIso(raw.followUpUpdatedAt) || undefined,
  };
}

function sortInquiries(list: Inquiry[]): Inquiry[] {
  return [...list].sort((a, b) => {
    const aTime = Date.parse(a.createdAt) || 0;
    const bTime = Date.parse(b.createdAt) || 0;
    return bTime - aTime;
  });
}

function withoutUndefined<T extends Record<string, unknown>>(data: T): Record<string, unknown> {
  return Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined));
}

export function firestoreErrorMessage(error: unknown): string {
  const code = typeof error === "object" && error && "code" in error ? String((error as { code?: string }).code) : "";
  if (code.includes("permission-denied")) {
    return "Firestore bu işleme izin vermiyor. Süper yönetici oturumu ve güvenlik kuralları kontrol edilmeli.";
  }
  if (code.includes("unavailable") || code.includes("network")) {
    return "Firestore şu an ulaşılamıyor. Bağlantı düzelince kayıtlar kendiliğinden yenilenir.";
  }
  if (error instanceof Error && error.message) return error.message;
  return "İşlem tamamlanamadı.";
}

export async function saveInquiry(data: Omit<Inquiry, "id" | "createdAt" | "status">): Promise<Inquiry> {
  const name = data.name?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim() || "";
  if (!name || !email) {
    throw new Error("Ad ve e-posta olmadan talep kaydedilemez.");
  }

  const createdAt = new Date().toISOString();
  const payload = withoutUndefined({
    type: data.type,
    source: data.source,
    name,
    email,
    phone: data.phone?.trim() || undefined,
    company: data.company?.trim() || undefined,
    country: data.country?.trim() || "Belirtilmedi",
    model: data.model?.trim() || undefined,
    span: data.span,
    length: data.length,
    height: data.height,
    areaM2: data.areaM2,
    accessories: data.accessories?.length ? data.accessories : undefined,
    message,
    status: "new" as const,
    createdAt,
    timestamp: serverTimestamp(),
  });

  try {
    const docRef = await addDoc(collection(db, COLLECTION), payload);
    return mapInquiry(docRef.id, { ...payload, timestamp: undefined });
  } catch (error) {
    console.error("Firestore inquiry write failed:", error);
    throw new Error(
      "Talep sunucuya yazılamadı. İnternet bağlantınızı kontrol edip tekrar deneyin veya WhatsApp / telefon ile doğrudan ulaşın."
    );
  }
}

/** Live Firestore feed. Contact-form and RFQ writes appear here without a local cache. */
export function subscribeInquiries(
  onData: (items: Inquiry[]) => void,
  onError: (error: Error) => void
): Unsubscribe {
  return onSnapshot(
    collection(db, COLLECTION),
    (snap) => {
      const list = snap.docs.map((entry) => mapInquiry(entry.id, entry.data() as Record<string, unknown>));
      onData(sortInquiries(list));
    },
    (error) => {
      console.error("Firestore inquiry subscription failed:", error);
      onError(new Error(firestoreErrorMessage(error)));
    }
  );
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  const snap = await getDocs(collection(db, COLLECTION));
  const list = snap.docs.map((entry) => mapInquiry(entry.id, entry.data() as Record<string, unknown>));
  return sortInquiries(list);
}

export async function updateInquiryStatus(id: string, status: InquiryStatus): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    status,
    statusUpdatedAt: new Date().toISOString(),
  });
}

export async function updateInquiryNote(id: string, adminNote: string): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    adminNote: adminNote.trim(),
    noteUpdatedAt: new Date().toISOString(),
  });
}

export async function updateInquiryFollowUp(id: string, followUpAt: string | null): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), {
    followUpAt: followUpAt ? followUpAt : deleteField(),
    followUpUpdatedAt: new Date().toISOString(),
  });
}

export async function deleteInquiry(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
