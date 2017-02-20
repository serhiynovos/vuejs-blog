import * as firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLnULKz2wFZ3wwh6qtf-93jrSyYferamc",
  authDomain: "vue-blog-c0a94.firebaseapp.com",
  databaseURL: "https://vue-blog-c0a94.firebaseio.com",
  storageBucket: "vue-blog-c0a94.appspot.com",
  messagingSenderId: "760549957903"
});

let db = firebaseApp.database();
let auth = firebase.auth;
export {
  db,
  firebaseApp,
  auth
}