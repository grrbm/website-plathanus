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
        const slide = new Slide({imageUrl:'https://drive.google.com/file/d/1DTG2OmU9Ovw9RnkeNoBbqq0v8KMCTfB9/view?usp=sharing'});
        await slide.save();
        console.log(`Slide created successfully !`);
    } catch (e) {
        if (e.toString().substring(0,18) === 'MongoError: E11000')
        {
            console.log("Slide has already been created.");
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

