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

    admin.firestore().enablePersistence().catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });
}
export default admin.firestore();