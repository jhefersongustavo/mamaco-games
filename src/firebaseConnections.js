import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkQJXC_KYjWSGZR2hnxU1uAV92NdQJKTo",
    authDomain: "mamaco-games.firebaseapp.com",
    projectId: "mamaco-games",
    storageBucket: "mamaco-games.appspot.com",
    messagingSenderId: "364629507460",
    appId: "1:364629507460:web:16e6fcb3aa4e70ccbc71d1",
    measurementId: "G-LXYRT2KMLJ"};

    const firebaseapp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseapp);
    const auth = getAuth(firebaseapp)

    export {db,auth}