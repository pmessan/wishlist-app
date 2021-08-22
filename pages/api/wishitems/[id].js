/* eslint-disable max-len */
// import fs from 'fs';
import nextConnect from 'next-connect';
import dbConnect from '../../../utils/dbConnect';
import WishItem from '../../../models/WishItem';
// import formidable from "formidable";
import middleware from '../../../utils/middleware';

// const saveFile = async (path, fileName) => {
//   const data = fs.readFileSync(path);
//   fs.writeFileSync(`./public/upload/img/${fileName}`, data);
//   await fs.unlinkSync(path);
// };

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  // console.log('Body:');
  // console.log(req.body);
  try {
    await dbConnect();
    const { state: [itemState], id: [itemId], owner: [ownerId] } = req.body;
    console.log('owner id');
    console.log(req.body);
    const item = await WishItem.findOneAndUpdate({ _id: itemId }, { state: itemState, owner: ownerId });
    // console.log(item);
    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

handler.delete(async (req, res) => {
  await dbConnect();
  try {
    const { id } = req.query;
    WishItem.findByIdAndDelete(id, (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
