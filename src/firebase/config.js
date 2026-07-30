import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5p1sVOUuPd-jda_vnKjEua6SWfSgrdtM",
    authDomain: "proyectofinalfarruggia-41e72.firebaseapp.com",
    projectId: "proyectofinalfarruggia-41e72",
    storageBucket: "proyectofinalfarruggia-41e72.firebasestorage.app",
    messagingSenderId: "160014096247",
    appId: "1:160014096247:web:2d51059f64697516b63372"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);