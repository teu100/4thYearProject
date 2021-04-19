import * as firebase from 'firebase';
import "firebase/auth";
import React, {useState} from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyAvMD1lE0-vl8bBD5pw6PfmEAoNANetpYg",
    authDomain: "task-dev-8e324.firebaseapp.com",
    projectId: "task-dev-8e324",
    storageBucket: "task-dev-8e324.appspot.com",
    messagingSenderId: "932393793242",
    appId: "1:932393793242:web:d46e9f236d20456dc957e3",
    measurementId: "G-56K0Z2QHFM"
  };
  
  let app;

  if(firebase.default.apps.length === 0 ){
    app = firebase.default.initializeApp(firebaseConfig);
  }else{
      app = firebase.default.app();
  }

  
  const auth = firebase.default.auth();


  export {auth };