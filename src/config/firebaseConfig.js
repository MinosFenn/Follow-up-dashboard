import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyCQ1cJPCTik9PsQUJvwVClJILyfILgFUKc",
    authDomain: "follow-up-7c12d.firebaseapp.com",
    projectId: "follow-up-7c12d",
    storageBucket: "follow-up-7c12d.appspot.com",
    messagingSenderId: "582748769753",
    appId: "1:582748769753:web:fe6097968230a3a50eddc8",
    measurementId: "G-9FSDZJ73K8"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();


  export default firebase;