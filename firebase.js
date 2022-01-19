import * as firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
import {getStorage} from "firebase/storage"
import { exp } from "react-native-reanimated";
const firebaseConfig = {
  apiKey: "AIzaSyCdfZuQFf5HN6bb5Tbxv2YlqURCb97mgkc",
  authDomain: "myproject-be1d2.firebaseapp.com",
  databaseURL: "https://myproject-be1d2-default-rtdb.firebaseio.com",
  projectId: "myproject-be1d2",
  storageBucket: "myproject-be1d2.appspot.com",
  messagingSenderId: "798709373702",
  appId: "1:798709373702:web:9e145968054d35cd765c87",
  measurementId: "G-T5M7QNBLCM"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export const db=getFirestore(app);
export const storage=getStorage(app);

