import firebase from "firebase/app";
import  "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYbfsB3xVEqCah3cdU1q8wjGvOcyso64A",
    authDomain: "esales-889e8.firebaseapp.com",
    databaseURL: "https://esales-889e8.firebaseio.com",
    projectId: "esales-889e8",
    storageBucket: "esales-889e8.appspot.com",
    messagingSenderId: "80079402312",
    appId: "1:80079402312:web:53dd83e0b47d8308966f7d",
    measurementId: "G-GTWE375V48"
  };
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider(); ///creating a new object instance from a certain auth  blueprint
provider.setCustomParameters({
    prompt:"select_account"
})

//signing in using the pop-up using the created provider
export const signInWithGoogle=()=>{
    auth.signInWithPopup(provider);
}

export default firebase;