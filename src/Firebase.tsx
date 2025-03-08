import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGol5SUAnrW4QlWCLl2zsPd_8jamLRcdY",
  authDomain: "amaranoc-am-b8a24.firebaseapp.com",
  projectId: "amaranoc-am-b8a24",
  storageBucket: "amaranoc-am-b8a24.appspot.com",
  messagingSenderId: "580607359342",
  appId: "1:580607359342:web:07e97221eb76cb224f297f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

interface Offer {
  id?: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const BestOffersObj: Offer[] = [];

const CommonOffersObj: Offer[] = [];
const Service: Offer[] = [];

const offerExists = async (collectionName: string, title: string) => {
  const q = query(collection(db, collectionName), where("title", "==", title));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

const uploadData = async (
  collectionName: string,
  data: Offer[]
): Promise<void> => {
  if (!data || data.length === 0) {
    console.warn(`No data provided for collection: ${collectionName}`);
    return;
  }

  try {
    const colRef = collection(db, collectionName);
    for (const item of data) {
      const exists = await offerExists(collectionName, item.title);
      if (!exists) {
        await addDoc(colRef, item);
        console.log(`Uploaded: ${item.title} to ${collectionName}`);
      } else {
        console.log(`Skipped (already exists): ${item.title}`);
      }
    }
  } catch (error) {
    console.error(`Error uploading data to ${collectionName}:`, error);
  }
};

(async () => {
  await uploadData("BestOffers", BestOffersObj);
  await uploadData("CommonOffers", CommonOffersObj);
  await uploadData("Service", Service);
})();
