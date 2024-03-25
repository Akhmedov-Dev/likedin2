import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDutiywHTgLnrAJtTyHfP5Eg6pT0rnbQqA",
    authDomain: "likedin-e0a18.firebaseapp.com",
    projectId: "likedin-e0a18",
    storageBucket: "likedin-e0a18.appspot.com",
    messagingSenderId: "863057611475",
    appId: "1:863057611475:web:ccb38c7a0bdc00fe122226",
    measurementId: "G-WZBTZHCVEG"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
