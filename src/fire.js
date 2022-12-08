import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz-UZVA6klwB73Nfvpp12L1T2x4AXxpOY",
  authDomain: "login-page-ecd8a.firebaseapp.com",
  projectId: "login-page-ecd8a",
  storageBucket: "login-page-ecd8a.appspot.com",
  messagingSenderId: "872698437512",
  appId: "1:872698437512:web:6a899efca26f6b741a243d",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const fire = initializeApp(firebaseConfig);

// export default fire;
