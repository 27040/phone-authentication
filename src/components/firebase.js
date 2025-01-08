import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPkRx_Gjb_ziXOeqiNtxLyGEtNj-LW-Ew",
    authDomain: "phone-auth-318de.firebaseapp.com",
    projectId: "phone-auth-318de",
    storageBucket: "phone-auth-318de.firebasestorage.app",
    messagingSenderId: "501262593454",
    appId: "1:501262593454:web:8b17dc73a727622818ac3f",
    measurementId: "G-83NGE3FFBF"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
