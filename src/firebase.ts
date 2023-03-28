import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_apiKey,
	authDomain: import.meta.env.VITE_FIREBASE_authDomain,
	projectId: import.meta.env.VITE_FIREBASE_projectId,
	storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
	messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
	appId: import.meta.env.VITE_FIREBASE_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function signIn(email: string, password: string) {
	return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email: string, password: string) {
	return createUserWithEmailAndPassword(auth, email, password);
}

export function signOutUser() {
	return signOut(auth);
}

export { onAuthStateChanged };
