import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1-pnoLV70CIflvP9AW6B7BbUwnxv01O8",
  authDomain: "flipkarclone.firebaseapp.com",
  projectId: "flipkarclone",
  storageBucket: "flipkarclone.appspot.com",
  messagingSenderId: "568278425459",
  appId: "1:568278425459:web:4b59327f3918bc7ae42f06",
  measurementId: "G-J7VPXWWQET",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAnalytics(firebaseApp);

export { db, auth };