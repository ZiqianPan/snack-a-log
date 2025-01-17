import firebase from "firebase/app"; import "./firebase/auth"

const firebaseConfig = { apiKey: process.env.REACT_APP_API_KEY, authDomain: process.env.REACT_APP_AUTH_DOMAIN, projectId: process.env.REACT_APP_PROJECT_ID, storageBucket: process.env.REACT_APP_STORAGE_BUCKET, messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID, appId: process.env.REACT_APP_APP_ID, measurementId: process.env.REACT_APP_MEASUREMENT_ID };

const app = firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = async () => {
    try {
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    await auth.signInWithPopup(googleProvider);
     } catch (err) {
      console.log(err);
    }
  };

  export const signOut = async () =>{
    try {
      await auth.signOut()
      alert("you've signed out - congrats.")
    } catch(err) {
      console.log(err)
    }
  }


export const auth = app.auth();