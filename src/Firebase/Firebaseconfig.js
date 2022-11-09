import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDUrR7CXuP69gRGr3sxEDbopabJCSR6D-I",
    authDomain: "backendmimax.firebaseapp.com",
    projectId: "backendmimax",
    storageBucket: "backendmimax.appspot.com",
    messagingSenderId: "750143034955",
    appId: "1:750143034955:web:101fc65e12eadfe0215fce"
}
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)