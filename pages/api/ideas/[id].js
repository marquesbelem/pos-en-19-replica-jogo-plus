import db from "../../../config/firebase-admin"

export default async (req, res) => {
  const { query: { id } } = req

  if (req.method === 'GET') {
    const doc = await db.collection("ideas").doc(id).get();
  

    if (!doc.exists) {
      res.status(404).end();
    } else {
      
      /*const comments = await db.collection("ideas").doc(id).collection("comments").get();
      // const comments = await db.collection("ideas").doc(id).listCollections()
      if(comments.exists) {
        res.status(200).json({detail: doc.data(), comments: comments.data()});
        console.log("api:: " + comments.data());
      }
      else {
        res.status(200).json({detail: doc.data(), comments: []});
        console.log("api2:: ");
      }*/

      res.status(200).json(doc.data());
    }
  } else if (req.method === 'PUT') {

  } else {
    const { title, content, comments } = req.body

    const data = {
      title: title,
      content: content,
      comments : comments
    }

    const doc = await db.collection("ideas").doc(id)
      .set(data);

    res.status(200).end();
  }

};