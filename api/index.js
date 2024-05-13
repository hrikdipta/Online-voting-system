import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js'
const app = express();
const port = 3000;


app.use(express.json());
app.use(cookieParser());

// connect to mongodb
dotenv.config();
mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log('mongodb connected !!');
}).catch((err) => { throw err; } );



//routes
app.use('/api/auth',authRouter);

//middlewires
app.use((err,req,res,next)=>{
  const statuscode=err.statuscode || 500;
  const message=err.message || "Internal server Error"
  return res.status(statuscode).json({
    success:false,
    statuscode,
    message
  })
})
app.listen(port, () => {
  console.log('Server is running on port', port);
});
