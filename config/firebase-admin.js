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
    apiKey:process.env.CONFIG_API_KEY,
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