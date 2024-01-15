
const fs = require('fs');

const index = fs.readFileSync('./index.html');
const data =
  JSON.parse(
    fs.readFileSync('./data.json')

  )
const products = data.products;

const express = require('express');
//express is a defacto standard for creating web servers in node.js, it is a framework that we can use to create web servers in node.js,

const app = express();
// app is an instance of express

//third party middleware
const morgan = require('morgan');
//url parameters 
//what is url parameter? > url parameters are the parameters that we send with the url?
//how will url parameter look like? > http://localhost:3000/123

app.get('/products/:productId', (req, res) => {
  console.log(req.params.productId);
  //`req.params` is an object that contains all the url parameters that we send with the request

})
app.use(morgan('dev'));//dev is a format of morgan>
app.use(express.json());//this is a middleware that parses the request body and adds it to the request object as req.body> it is a built in middleware in express> it is a middleware that we can use to parse the reque

//middlewares
//applicqtion level middleware
app.use((req, res, next) => {
  console.log(req.method, req.hostname, req.ip);
  next();//next is a function that we call when we are done with the middleware> it tells express that we are done with the middleware and it can move on to the next middleware
})
//route level

const auth = (req, res, next) => {
  //query > what is Query?> query is a property of request object that contains all the query parameters that we send with the request
  //how will query look like? > http://localhost:3000/?admin=true
  if (req.query.admin === 101) {
    console.log('admin is true')
    next();
  } else {
    res.send('no auth');
  }
}

app.use(express.static('public'));   //this is a middleware that serves static files from the public folder> it is a built in middleware in express> it is a middleware that we can use to serve static files like html, css, js, images, etc.> it takes a folder name as an argument and serves all the files in that folder>


app.use(auth);
//get api > get request > get method >
app.get('/', auth, (req, res) => {
  res.json({ type: 'get' });
})
app.put('/', (req, res) => {
  res.json({ type: 'put' });
})
app.post('/', (req, res) => {
  res.json({ type: 'post' });
})
app.delete('/', (req, res) => {
  res.json({ type: 'delete' });
})





//at end 
app.listen(3000, () => {
  console.log('listening on port 3000');
});


//3 ways to send data to the server
//1. query parameters
//2. request body
//3. url parameters

//3 ways to send data to the client
//4. headers
//5. cookies
//6. session
