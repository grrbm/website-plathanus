const mongoose = require('mongoose')

const slideSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        default: undefined,
        index: true,
        unique: true
    }
});

slideSchema.statics.addSlide = async function (imageUrl) {
    try{
        const slide = new Slide({imageUrl: imageUrl});
        await slide.save();
        return slide;
    } catch (e) {
        return;
    }
}

const Slide = mongoose.model('Slide', slideSchema)
module.exports = Slide