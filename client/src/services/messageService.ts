import { db } from "../lib/firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, orderBy, serverTimestamp } from "firebase/firestore";

export interface Inquiry {
  id: string;
  type: "quote" | "contact";
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
  status: "new" | "contacted" | "quoted" | "archived";
  createdAt: string;
}

const LOCAL_STORAGE_KEY = "structiva_leads_data";

const SAMPLE_INQUIRIES: Inquiry[] = [];

export async function saveInquiry(data: Omit<Inquiry, "id" | "createdAt" | "status">): Promise<Inquiry> {
  const newId = `lead-${Date.now().toString(36)}`;
  const now = new Date().toISOString();

  const newInquiry: Inquiry = {
    ...data,
    id: newId,
    status: "new",
    createdAt: now,
  };

  // 1. Mandatory Remote Firestore Sync
  // Ensure that the inquiry is securely and permanently persisted to Firestore before confirming success.
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...newInquiry,
      timestamp: serverTimestamp(),
    });
    if (docRef?.id) {
      newInquiry.id = docRef.id;
    }
  } catch (firebaseErr: any) {
    console.error("Critical Firestore write failure:", firebaseErr);
    // DO NOT swallow this error! A quote that is only saved in the user's local browser is NOT received by the business.
    throw new Error(
      "Teklif kaydı sunucuya iletilemedi. Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz veya WhatsApp / Telefon ile doğrudan bizimle iletişime geçiniz."
    );
  }

  // 2. Client-side local backup cache (only saved after confirmed Firestore persistence)
  try {
    const existing = getLocalInquiries();
    const updated = [newInquiry, ...existing.filter((item) => item.id !== newInquiry.id)];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated.slice(0, 50)));
  } catch (e) {
    console.warn("Local storage cache warning:", e);
  }

  // 3. Optional asynchronous email notification dispatch (non-blocking notification queue)
  try {
    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInquiry),
    }).catch((err) => console.warn("Email dispatch note:", err));
  } catch (err) {
    console.warn("Email dispatch error:", err);
  }

  return newInquiry;
}

export function getLocalInquiries(): Inquiry[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(SAMPLE_INQUIRIES));
      return SAMPLE_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return SAMPLE_INQUIRIES;
  }
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  try {
    const q = query(collection(db, "inquiries"), orderBy("timestamp", "desc"));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const list: Inquiry[] = [];
      snap.forEach((d) => {
        const item = d.data();
        list.push({
          id: d.id,
          type: item.type || "quote",
          name: item.name || "Anonymous",
          email: item.email || "",
          phone: item.phone,
          company: item.company,
          country: item.country || "International",
          model: item.model,
          span: item.span,
          length: item.length,
          height: item.height,
          areaM2: item.areaM2,
          accessories: item.accessories,
          message: item.message || "",
          status: item.status || "new",
          createdAt: item.createdAt || new Date().toISOString(),
        });
      });
      // Update local cache
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
      return list;
    }
  } catch (err) {
    console.warn("Using offline / cached inquiries:", err);
  }

  return getLocalInquiries();
}

export async function updateInquiryStatus(id: string, status: Inquiry["status"]): Promise<void> {
  // Update local storage
  const list = getLocalInquiries();
  const index = list.findIndex((x) => x.id === id);
  if (index !== -1) {
    list[index].status = status;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }

  // Update Firestore if possible
  try {
    const docRef = doc(db, "inquiries", id);
    await updateDoc(docRef, { status });
  } catch {
    // Ignore Firestore offline
  }
}

export async function deleteInquiry(id: string): Promise<void> {
  const list = getLocalInquiries().filter((x) => x.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));

  try {
    await deleteDoc(doc(db, "inquiries", id));
  } catch {
    // Ignore
  }
}
