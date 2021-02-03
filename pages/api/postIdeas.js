import db from "../../config/firebase-admin"

export default async (req, res) => {
    const { title, content, category } = req.body

    const result = await db.collection('ideas').add({
        title: title,
        content: content,
        category: category
      });
      
    //res.send('sucess');
    res.status(200).end();
}