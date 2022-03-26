
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDa-IhWCegMKQJ4McS-04EDZn6g8BZbMe8",
  authDomain: "chatreact-3e4bc.firebaseapp.com",
  databaseURL: "https://chatreact-3e4bc-default-rtdb.firebaseio.com",
  projectId: "chatreact-3e4bc",
  storageBucket: "chatreact-3e4bc.appspot.com",
  messagingSenderId: "330278562815",
  appId: "1:330278562815:web:32e47e447b64a83de995ca",
  measurementId: "G-4J37XYL7Y0"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;
