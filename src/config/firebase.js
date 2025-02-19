// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCQfp_gLM-Mk6d9CIro6y2MoCx06WgopiI",
  authDomain: "chat-app-dfa90.firebaseapp.com",
  projectId: "chat-app-dfa90",
  storageBucket: "chat-app-dfa90.firebasestorage.app",
  messagingSenderId: "1054121246557",
  appId: "1:1054121246557:web:03ba78d0d72404028032b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email: email,
      name: "",
      avatar: "",
      bio: "Hey there, I'm using Chat App",
      lastSeen: Date.now(),
    });

    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (err) {
    console.log(err);
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
    toast.error(err.code);
  }
};

export { signup, login, logout, auth, db };
