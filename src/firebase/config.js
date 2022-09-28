import { initializeApp } from 'firebase/app'
import {
    getFirestore
  } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDA3FG5JcOA9LbX2ru8w9qXtzpQG5OEVX4",
    authDomain: "blue-jether-blogs.firebaseapp.com",
    projectId: "blue-jether-blogs",
    storageBucket: "blue-jether-blogs.appspot.com",
    messagingSenderId: "887732712890",
    appId: "1:887732712890:web:250435aecc1a12c0d75983"
  };

     // init firebase
     initializeApp(firebaseConfig)

       // init services 
    const db = getFirestore();
    
    //  Creating a const for the collection 
    // const colRef = collection(db, 'Blogs')

    export {db}
    