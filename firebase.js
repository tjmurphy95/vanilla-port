const initializeApp = require("firebase/app");
const getFirestore = require("firebase/firestore");
const { collection, addDoc } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLeyCB5hYJqCobCtctzhSfleeM5hvmXyw",
  authDomain: "contact-form-7de46.firebaseapp.com",
  projectId: "contact-form-7de46",
  storageBucket: "contact-form-7de46.appspot.com",
  messagingSenderId: "148953551599",
  appId: "1:148953551599:web:8cbb9589fffae823dd811a",
  measurementId: "G-PQ518PE2LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

module.exports = { db };
