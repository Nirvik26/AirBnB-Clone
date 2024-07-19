
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCFWBKYwC-yK0Lw72VOeAFs36jkpiGliQ0",
  authDomain: "air-bnb-clone-2eef6.firebaseapp.com",
  projectId: "air-bnb-clone-2eef6",
  storageBucket: "air-bnb-clone-2eef6.appspot.com",
  messagingSenderId: "772004387555",
  appId: "1:772004387555:web:a98a49e58f1584910843d6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider()