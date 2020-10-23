const path = require('path')
const http = require('http')
const express = require('express')
const mongoose = require('mongoose');
const Slide = require('./models/slide')
const   SlideRouter   = require('./routers/slide'),
        CardRouter   = require('./routers/card')
        
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()


const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 4000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

const proxy = '';

app.use(cors())
   .use(bodyParser.json({limit: '50mb'}))
   .use(bodyParser.urlencoded({limit: '50mb', extended: true }))
   .use(proxy, router);

app.use(proxy, CardRouter);
app.use(proxy, SlideRouter);

// --------------------------------------------------------------------
// MONGODB/MONGOOSE
// --------------------------------------------------------------------
const databaseUri = 'mongodb://mongo:27017/plathanus-database';
async function connectDB(){
    const connection = await mongoose.connect(databaseUri, {
                            useNewUrlParser: true,
                            useCreateIndex: true,
                            useUnifiedTopology: true,
                            bufferCommands: false,
                            bufferMaxEntries: 0,
                            useFindAndModify: false 
    })
    .then(()=> console.log(`connected to ${databaseUri}`))
    .catch(err => console.log(`Error on db connection:  ${err.message}`));
    //Populate DB here !
    //----------------------------------------------------------------
    try{
        const slide = new Slide({imageName: 'slideOne',imageUrl:'https://i.imgur.com/nlVAFXN.jpg'});
        await slide.save();
        console.log(`Slide created successfully !`);
    } catch (e) {
        if (e.toString().substring(0,18) === 'MongoError: E11000')
        {
            console.log("Slide has already been created.");
        }
    }
    try {
        const secondSlide = new Slide({imageName: 'slideTwo', imageUrl:'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'});
        await secondSlide.save();
        console.log(`Second Slide created successfully !`);
    } catch (e) {
        if (e.toString().substring(0,18) === 'MongoError: E11000')
        {
            console.log("Second Slide has already been created.");
        }
    }

    try {
        const thirdSlide = new Slide({imageName: 'slideThree', imageUrl:'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'});
        await thirdSlide.save();
        console.log(`Third Slide created successfully !`);
    } catch (e) {
        if (e.toString().substring(0,18) === 'MongoError: E11000')
        {
            console.log("Third Slide has already been created.");
        }
    }
    
}
connectDB();

// --------------------------------------------------------------------
// SERVER LISTENER
// --------------------------------------------------------------------
server.listen(port, () => {
    console.log(`Server is up on port ${port}!`) 
})

