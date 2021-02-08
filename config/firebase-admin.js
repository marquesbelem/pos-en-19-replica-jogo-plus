/*import admin from 'firebase-admin'

export const verifyIdTokein = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                clientEmail: process.env.FRB_CLIENT_EMAIL,
                privateKey: process.env.FRB_PRIVATE_KEY,
                projectId: process.env.CONFIG_PROJECT_ID
            }),
            databaseURL: process.env.CONFIG_DATA_BASE_URL
        })
    }

    return admin.auth().verifyIdToken(token).catch((error) => {
        throw error;
    })
}*/