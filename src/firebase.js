import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWpcXENbHD86JYbrQ3FRKqYfJQxllWAqU",
  authDomain: "saas-cafd5.firebaseapp.com",
  projectId: "saas-cafd5",
  storageBucket: "saas-cafd5.appspot.com",
  messagingSenderId: "895146169277",
  appId: "1:895146169277:web:3c926a7f311a923be938d4",
  measurementId: "G-5D8EY11J11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
