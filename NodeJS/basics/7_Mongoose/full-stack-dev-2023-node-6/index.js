require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const mongoose = require('mongoose');

//db connection

// getting-started.js
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  console.log('db connected')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));
//bodyParser
server.use(express.json());
server.use(morgan('default'));

server.use('/products', productRouter.router);
server.use('/users', userRouter.router);


server.listen(8000, () => {
  console.log('server started');
});
