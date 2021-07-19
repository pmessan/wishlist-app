import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String,
        default: '/img/danie.jpg'
    },
    itemLink: {
        type: String
    },
    state: {
        type: String,
        default: 'w'
    }

});

export default mongoose.models.WishItem || mongoose.model('WishItem', itemSchema);