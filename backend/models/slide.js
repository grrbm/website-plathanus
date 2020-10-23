const mongoose = require('mongoose')

const slideSchema = new mongoose.Schema({
    imageName: {
        type: String,
        default: undefined,
        index: true,
        unique: true
    },
    imageUrl: {
        type: String,
        default: undefined,
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