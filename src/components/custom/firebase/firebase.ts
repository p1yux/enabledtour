import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Collections
export const REG_COLLECTION = "registrations";
export const NEWS_COLLECTION = "newsletter";

// Helpers
export async function addRegistration(email: string) {
  return addDoc(collection(db, REG_COLLECTION), { email, createdAt: Date.now() });
}

export async function addNewsletter(email: string) {
  return addDoc(collection(db, NEWS_COLLECTION), { email, createdAt: Date.now() });
}

export async function getAll(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function updateById(collectionName: string, id: string, data: Record<string, unknown>) {
  const ref = doc(db, collectionName, id);
  await updateDoc(ref, data);
}

export async function deleteById(collectionName: string, id: string) {
  const ref = doc(db, collectionName, id);
  await deleteDoc(ref);
}


