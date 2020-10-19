const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        default: undefined
    },
    description: {
        type: String,
        default: undefined
    }
});

cardSchema.statics.addCard = async function (title, description) {
    try{
        const card = new Card({title, description});
        await card.save();
        return card;
    } catch (e) {
        return;
    }
}

const Card = mongoose.model('Card', cardSchema)
module.exports = Card