// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaK_OtXTfSxIaaQBBGbQ0TRYacnjJyv4w",
  authDomain: "dashboardzen-d476e.firebaseapp.com",
  projectId: "dashboardzen-d476e",
  storageBucket: "dashboardzen-d476e.appspot.com",
  messagingSenderId: "310958147169",
  appId: "1:310958147169:web:ff73f9d48dae2610418c20",
  measurementId: "G-7Z4ZKL15VF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// function to add user to the database

module.exports = db;
