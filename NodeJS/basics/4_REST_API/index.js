// REST APIs
// CRUD - Create, Read, Update, Delete (HTTP Methods) - POST, GET, PUT, DELETE (HTTP Verbs) - Representational State Transfer (REST) - REST APIs are stateless - No data is stored on the server >
// 

const express = require('express');
const fs = require('fs');

const data = JSON.parse(
  fs.readFileSync('./data.json', 'utf-8')
)
const products = data.products;



const app = express();
//API - Endpoint - Route 

// Add this line to use JSON middleware
app.use(express.json());

// Add this line to use URL-encoded middleware
app.use(express.urlencoded({ extended: true }));

// Your routes go here


//Products API
app.get('/products', (req, res) => {
  res.json(products);
});
app.get('/product/:id', (req, res) => {
  const iq = +(req.params.id);
  const product = products.find(p => p.id === iq);
  res.json(product);
});

//Create API
app.post('/products', (req, res) => {
  // data to send to server comes from the request body
  const newProduct = req.body;

  // generate a new id for the product
  newProduct.id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

  // add the new product to the products array
  products.push(newProduct);

  // send the new product as the response
  res.json(newProduct);
});
app.put('/products/:id', (req, res) => {
  const id = +(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    // If no product with the given id was found, send a 404 response
    res.status(404).json({ message: 'Product not found' });
  } else {
    // Update the product with the data in the request body
    const updatedProduct = { ...req.body, id };
    products.splice(productIndex, 1, updatedProduct);

    // Send the updated product as the response
    res.json(updatedProduct);
  }
});
app.delete('/products/:productId', (req, res) => {
  res.json({ type: 'delete' });
});

//just check if server is running 


app.listen(3000, () => {
  console.log('listening on port 3000');
})