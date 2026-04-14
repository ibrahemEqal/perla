import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyABoBGrJP6KuEN6Wk-SYG6asJu8tjxjIQo",
    authDomain: "perla-chocolate.firebaseapp.com",
    projectId: "perla-chocolate",
    storageBucket: "perla-chocolate.firebasestorage.app",
    messagingSenderId: "519855204295",
    appId: "1:519855204295:web:76a88736274ad19b0a9be2",
    measurementId: "G-9DRJW2Y8JK"
};

 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);