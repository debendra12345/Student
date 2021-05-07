 import * as firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyD6Tlt8XiplHkBrz5v8Vd9PzQbhdQxI6cM",
    authDomain: "studentattendanceapp-7e525.firebaseapp.com",
    databaseURL: "https://studentattendanceapp-7e525-default-rtdb.firebaseio.com",
    projectId: "studentattendanceapp-7e525",
    storageBucket: "studentattendanceapp-7e525.appspot.com",
    messagingSenderId: "433326236507",
    appId: "1:433326236507:web:f08eef0e2b93be14d3f07e"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  