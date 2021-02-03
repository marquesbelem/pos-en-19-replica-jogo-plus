import firebase from "firebase/app";
import 'firebase/firebase-database';

/*if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: process.env.FRB_CLIENT_EMAIL,
            privateKey: process.env.FRB_PRIVATE_KEY,
            projectId: process.env.FRB_PROJECT_ID
        }),
        databaseURL: process.env.FRB_DATA_BASE_URL
    })
}*/

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAXNuvbe5Qz28ZGUiwobBK0UBCvA7ZpJwI",
    authDomain: "replicajogoplus.firebaseapp.com",
    databaseURL: "https://replicajogoplus-default-rtdb.firebaseio.com",
    projectId: "replicajogoplus",
    storageBucket: "replicajogoplus.appspot.com",
    messagingSenderId: "881393937368",
    appId: "1:881393937368:web:64857484fbfe958685e0ad"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase