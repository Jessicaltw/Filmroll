import * as React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "@mui/material";
import { Box } from "@mui/material";


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBwz2KQyp-L542C7sTXIXBzkquM4jVRV_c",
  authDomain: "filmroll-7ac29.firebaseapp.com",
  projectId: "filmroll-7ac29",
  storageBucket: "filmroll-7ac29.appspot.com",
  messagingSenderId: "254118101228",
  appId: "1:254118101228:web:c75c27c395c0faaec4e5c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSnapshots() {
    const col = collection(db, 'database');
    const snapshot = await getDocs(col);
    const login = snapshot.docs.map(doc => doc.data());

    console.log(login);
    return login;
  }

  async function addSnapshot(){

    const timestamp = String(new Date().getTime());
    const json = window.localStorage.getItem("payload");

    await setDoc(doc(db, "database", timestamp), {
        data: json,
        login_time: timestamp
    });             

}

export default function Sync(){
    const payload = useSelector((state) => state);
    const json = JSON.stringify(payload)

    window.localStorage.setItem("payload",json);

}