// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
// 
// import { getAimport { initializeApp } from "firebase/app";uth, onAuthStateChanged, getRedirectResult } from "firebase/auth";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAtfp0KXpoaMKYKwNYVPXsy38DGvv91hc",
  authDomain: "clone-33696.firebaseapp.com",
  projectId: "clone-33696",
  storageBucket: "clone-33696.appspot.com",
  messagingSenderId: "528954352460",
  appId: "1:528954352460:web:b43637a29293975ee7e5e9",
  measurementId: "G-RN6FB75P6S",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export {db, auth};


// const firebaseApp = initializeApp({
//   firebaseConfig
// });
// const auth = getAuth(firebaseApp);
// onAuthStateChanged(auth, (user) => {
//   /* check status */
// });
// export { db, auth };

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
