// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCD6yffyPD7vSv7-EC4kqH1zRLL3dXFq-4",
	authDomain: "crud-react-e5b79.firebaseapp.com",
	projectId: "crud-react-e5b79",
	storageBucket: "crud-react-e5b79.appspot.com",
	messagingSenderId: "55262687713",
	appId: "1:55262687713:web:947793c62a95e318aee2a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
