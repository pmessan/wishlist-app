import fs from 'fs';
import nextConnect from 'next-connect';
import dbConnect from '../../../utils/dbConnect';
import WishItem from '../../../models/WishItem';
// import formidable from "formidable";
import middleware from '../../../utils/middleware';

const saveFile = async (path, fileName) => {
  const data = fs.readFileSync(path);
  fs.writeFileSync(`./public/upload/img/${fileName}`, data);
  await fs.unlinkSync(path);
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  await dbConnect();
  try {
    /* The code below deals only with text data coming from the form */
    const { name: [itemName], description: [itemDescription], buyLink: [itemBuyLink] } = req.body;

    // save uploaded file
    const { itemImg: [{ path, originalFilename }] } = req.files;
    const filename = originalFilename.replace(/\s/g, '');
    saveFile(path, filename);

    // create a new item

    const newWishItem = {
      name: itemName,
      description: itemDescription,
      imgUrl: `/upload/img/${filename}`,
      buyLink: itemBuyLink,
      state: 'w',
      imgAlt: itemName,
    };
    console.log(newWishItem);
    WishItem.create([newWishItem], (err) => {
      if (err) {
        console.log(err);
      }
    });
    // res.status(201).json({ success: true, data: newWishItem });
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

handler.get(async (req, res) => {
  try {
    await dbConnect();
    const items = await WishItem.find({}); /* find all the data in our database */
    res.status(200).json({ success: true, data: items });
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

// export default async function handler(req, res) {
//     const { method } = req;

//     await dbConnect();

//     switch (method) {
//         case 'GET':
//             try {
//                 const items = await WishItem.find({}); /* find all the data in our database */
//                 res.status(200).json({ success: true, data: items });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         case 'POST':
//             try {
//                 /* The code below deals only with text data coming from the form */
//                 // // create a new item
//                 // let { name, description, buyLink, imgUrl } = req.body
//                 // // const state = "w";
//                 // // const imgAlt = "a beautiful item";
//                 // let newWishItem =
//                 // {
//                 //     name: name,
//                 //     description: description,
//                 //     imgUrl: imgUrl,
//                 //     buyLink: buyLink,
//                 //     state: "w",
//                 //     imgAlt: name
//                 // };
//                 // console.log(newWishItem);
//                 // await WishItem.create([newWishItem], (err) => {
//                 //     if (err) {
//                 //         console.log(err);
//                 //     }
//                 // })
//                 // res.status(201).json({ success: true, data: newWishItem });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         default:
//             res.status(400).json({ success: false });
//             break;
//     }
// }
