import admin from 'firebase-admin'
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: process.env.FRB_CLIENT_EMAIL,
            privateKey: process.env.FRB_PRIVATE_KEY,
            projectId: process.env.FRB_PROJECT_ID
        }),
        databaseURL: process.env.FRB_DATA_BASE_URL
    })
}
export default admin.firestore();