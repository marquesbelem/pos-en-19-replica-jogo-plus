import db from "../../../config/firebase-admin"

export default async (req, res) => {
  const { query: { id } } = req

  const doc = await db.collection("ideas").doc(id).get();
  if (!doc.exists) {
    res.status(404).end();
  } else {
    res.status(200).json(doc.data());
  }

};