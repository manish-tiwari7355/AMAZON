import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDagTZPf_jPWCb28C4Ne0ZeT2Ejh6h8k3s",
  authDomain: "challenge-101d5.firebaseapp.com",
  projectId: "challenge-101d5",
  storageBucket: "challenge-101d5.appspot.com",
  messagingSenderId: "708943042276",
  appId: "1:708943042276:web:2fa26e3ade3fee874f3ef1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
 