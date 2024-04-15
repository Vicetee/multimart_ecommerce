import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD99UUekNXE1BAPZxuaANo7VlFRINe2MZ4",
  authDomain: "multimart-84094.firebaseapp.com",
  projectId: "multimart-84094",
  storageBucket: "multimart-84094.appspot.com",
  messagingSenderId: "656874119244",
  appId: "1:656874119244:web:4e02d7ffccf08f3c3ad4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;