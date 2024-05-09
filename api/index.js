import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
const app = express();
const port = 3000;


app.use(express.json());
// connect to mongodb
dotenv.config();
mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log('mongodb connected !!');
}).catch((err) => { throw err; } );



//routes
app.use('/api/auth',authRouter);

//middlewires
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || "Internal server Error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
app.listen(port, () => {
  console.log('Server is running on port', port);
});
