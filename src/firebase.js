import firebase from 'firebase';
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDt9SN6KnVhH3X6UAa7IhvsmKvtqx-rARY",
    authDomain: "acm-acmw-app-6aa17.firebaseapp.com",
    databaseURL: "https://acm-acmw-app-6aa17.firebaseio.com",
    projectId: "acm-acmw-app-6aa17",
    storageBucket: "acm-acmw-app-6aa17.appspot.com",
    messagingSenderId: "1010831108005",
    appId: "1:1010831108005:web:bd680245df41f804"

});

var db = firebaseApp.firestore();

export { db };

