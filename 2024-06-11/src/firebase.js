import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtdOSqbeXdkmcEunKTY-IYTTO4qQ-GMeE",
    authDomain: "js-crud-project-ad64a.firebaseapp.com",
    projectId: "js-crud-project-ad64a",
    storageBucket: "js-crud-project-ad64a.appspot.com",
    messagingSenderId: "351788470565",
    appId: "1:351788470565:web:ab0d7d7233f343383e4acc"
  };
  
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
export {
    app
}