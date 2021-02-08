import firebase from "firebase/app";
import 'firebase/firebase-database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_CONFIG_API_KEY,
    authDomain:process.env.CONFIG_AUTH_DOMAIN,
    databaseURL:"https://replicajogoplus-default-rtdb.firebaseio.com",
    projectId:process.env.CONFIG_PROJECT_ID,
    storageBucket:process.env.CONFIG_STORAGE,
    messagingSenderId:process.env.CONFIG_MESSAGIN,
    appId:process.env.CONFIG_APP_ID
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase