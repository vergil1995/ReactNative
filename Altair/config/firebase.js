import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCxrVKDq-2B_mijHD6KL61f7PK-vhDCHCs",
    authDomain: "altair-rn.firebaseapp.com",
    databaseURL: "https://altair-rn.firebaseio.com",
    projectId: "altair-rn",
    storageBucket: "altair-rn.appspot.com",
    messagingSenderId: "859119399264"
  };
  export const firebaseApp = firebase.initializeApp(config);