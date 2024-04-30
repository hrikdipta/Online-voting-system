import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World');
});
// connect to mongodb
dotenv.config();
mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log('mongodb connected !!');
}).catch((err) => { throw err; } );

app.listen(port, () => {
  console.log('Server is running on port', port);
});
