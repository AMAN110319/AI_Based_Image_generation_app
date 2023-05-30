import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

// api end points which we hook on from front end side 
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/',(req, res) => {
    res.send("hi from DALL-E");
})

const startServer = async ()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=> console.log(`server listening on port http://localhost:8080`)) 
    }
    catch (error){
        console.log(err);
    }
   
}
startServer();