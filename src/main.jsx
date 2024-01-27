import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Ppjo270LiAQoLTseyrsCDGrTG2phB4c",
  authDomain: "ecommerce1-a296c.firebaseapp.com",
  projectId: "ecommerce1-a296c",
  storageBucket: "ecommerce1-a296c.appspot.com",
  messagingSenderId: "269099498422",
  appId: "1:269099498422:web:799bf3b35537c254e81f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>

    <App />
  </ChakraProvider>

)
