import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCB4Za-t2Kj2yHCGFw3YEq2nNmk3b4e7pE",
    authDomain: "success-story-30dd1.firebaseapp.com",
    databaseURL: "https://success-story-30dd1.firebaseio.com",
    projectId: "success-story-30dd1",
    storageBucket: "success-story-30dd1.appspot.com",
    messagingSenderId: "474259261655",
    appId: "1:474259261655:web:1b95a0c0ed3d9db3268892",
    measurementId: "G-E37MP7JV0C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;