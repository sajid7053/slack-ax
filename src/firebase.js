import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDQKPKJlKYXFmLz81zRj7nFaenvx6K-4iE",
    authDomain: "slack-ax.firebaseapp.com",
    projectId: "slack-ax",
    storageBucket: "slack-ax.appspot.com",
    messagingSenderId: "140246865599",
    appId: "1:140246865599:web:89c2d0fb043d6cbeb6180a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider }