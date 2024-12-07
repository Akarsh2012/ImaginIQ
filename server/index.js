import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import imagineiqRoutes from './routes/imagineiqRoutes.js';
import connectDB from './mongodb/connect.js';





dotenv.config();
const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/imagineiq',imagineiqRoutes);



app.get('/',async(requestAnimationFrame,res)=>{

    res.send('Hello from ImagineIQ! ')
})
const startServer = async()=>{
   try{
    connectDB(process.env.MONGODB_URL);
    app.listen(8080,()=>console.log('Server has started at port http://localhost:8080'));
   }catch(err){
console.log('Error:',error);
   }


}
startServer();  