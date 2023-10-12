import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCyRr8N82LVCD-2oBtqUKFSg5YSAtae4E",
  authDomain: "instaposts-ecd80.firebaseapp.com",
  projectId: "instaposts-ecd80",
  storageBucket: "instaposts-ecd80.appspot.com",
  messagingSenderId: "913476546656",
  appId: "1:913476546656:web:43470fe7947f1383f65305"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)