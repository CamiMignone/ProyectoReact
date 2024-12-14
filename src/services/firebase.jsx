
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpQp_RhgpGlk_-wT_aGcWjngwZIwKr-2s",
    authDomain: "coder-react-6217e.firebaseapp.com",
    projectId: "coder-react-6217e",
    storageBucket: "coder-react-6217e.firebasestorage.app",
    messagingSenderId: "505771490595",
    appId: "1:505771490595:web:74407865be136f8cc26096"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)