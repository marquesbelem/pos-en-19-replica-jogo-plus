import db from "../../config/firebase-admin"

export default async (_, res) => {
    const snapshot = await db.collection('ideas').get();
    const data = [];

    snapshot.forEach(element => {
        data.push({id:element.id, ...element.data()})
    });
  
    res.status(200).json(data);
}
