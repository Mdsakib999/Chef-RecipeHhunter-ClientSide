// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHPn16j6zDbC5rO10D6c6zYS5bOmkbuZE",
  authDomain: "b7a10-chef-recipe-hunter-2da44.firebaseapp.com",
  projectId: "b7a10-chef-recipe-hunter-2da44",
  storageBucket: "b7a10-chef-recipe-hunter-2da44.appspot.com",
  messagingSenderId: "845713763090",
  appId: "1:845713763090:web:490861bb5fea838619e1cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;