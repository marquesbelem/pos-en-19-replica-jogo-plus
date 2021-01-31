import db from "../../config/firebase-admin"

export default async (req, res) => {
    const { title, content } = req.body

    const result = await db.collection('ideas').add({
        title: title,
        content: content
      });
      
    res.send('sucess');
}