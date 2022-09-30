import { initializeApp } from 'firebase/app'
import {
    getFirestore
  } from 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyBjsbckru4PFS9zqX4TdiKXKVFR04SfB2o",
    authDomain: "correct-blogs.firebaseapp.com",
    projectId: "correct-blogs",
    storageBucket: "correct-blogs.appspot.com",
    messagingSenderId: "898568466126",
    appId: "1:898568466126:web:ac951629a09ae00f442a9f"
  };

     // init firebase
     initializeApp(firebaseConfig)

       // init services 
    const db = getFirestore();
    
    //  Creating a const for the collection 
    // const colRef = collection(db, 'Blogs')

    export {db}
    