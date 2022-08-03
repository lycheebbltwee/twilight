import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSRnV766YMHHz5lhSy64RysyatSEcGLDQ",
    authDomain: "react-ecommerce-project-9ce1f.firebaseapp.com",
    projectId: "react-ecommerce-project-9ce1f",
    storageBucket: "react-ecommerce-project-9ce1f.appspot.com",
    messagingSenderId: "424940335762",
    appId: "1:424940335762:web:d47d4e69370d217ea02c4b",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
