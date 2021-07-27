import dbConnect from '../../../utils/dbConnect';
import WishItem from '../../../models/WishItem';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const items = await WishItem.find({}); /* find all the data in our database */
                res.status(200).json({ success: true, data: items });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {

                // create a new item
                let { name, description, buyLink, imgUrl } = req.body
                // const state = "w";
                // const imgAlt = "a beautiful item";
                let newWishItem =
                {
                    name: name,
                    description: description,
                    imgUrl: imgUrl,
                    buyLink: buyLink,
                    state: "w",
                    imgAlt: name
                };
                console.log(newWishItem);
                await WishItem.create([newWishItem], (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                res.status(201).json({ success: true, data: newWishItem });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
