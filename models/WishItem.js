import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    imgAlt: {
        type: String,
        required: true,
    },
    buyLink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
});

export default mongoose.models.WishItem || mongoose.model('wishitem', itemSchema);
