import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbt2CWJF6fxPHuVuh5Zy7mDWdkCXNK2fY",
  authDomain: "authentication-8.firebaseapp.com",
  projectId: "authentication-8",
  storageBucket: "authentication-8.appspot.com",
  messagingSenderId: "737616886993",
  appId: "1:737616886993:web:cb42573a383e0258c4d9f0",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
