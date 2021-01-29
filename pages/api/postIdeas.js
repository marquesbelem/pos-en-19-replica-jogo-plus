/*import db from "../../config/firebase-admin"

export default async (_, res) => {
    const snapshot = await db.collection('ideas').get();
    const sites = [];

    snapshot.forEach(element => {
        sites.push({id:element.id, ...element.data()})
    });
  
    res.status(200).json(sites);
}*/

import db from "../../config/firebase-admin"

export default async (req, res) => {
    const { title, content } = req.body

    const result = await db.collection('ideas').add({
        title: title,
        content: content
      });
      
    res.send('sucess');
}