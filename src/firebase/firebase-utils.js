import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsjgWP0ZK8EeUXajUNQO_9Ne3UwuthASw",
    authDomain: "crwn-db-7fd85.firebaseapp.com",
    databaseURL: "https://crwn-db-7fd85.firebaseio.com",
    projectId: "crwn-db-7fd85",
    storageBucket: "crwn-db-7fd85.appspot.com",
    messagingSenderId: "518231024199",
    appId: "1:518231024199:web:0e9e48d915725b9d9e8762",
    measurementId: "G-GT5LFXYGP8"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
