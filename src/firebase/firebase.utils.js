import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import swal from "sweetalert";
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

//creating the user data and inserting it to the firestore
//checks the collection of users whether it has any document data 
//the document that it checks has the id associated to the user
//ie if the document with user.id has the snapshot in it then it wont create the record
export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);// gets the doc reference 
    const snapShot=await userRef.get(); //gets the actual data object
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            swal("problem with creating user:");
   
        }
       
    }
    return userRef;
}

export default firebase;