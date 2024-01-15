const data = require('../model/data.js');




exports.getProduct = (req, res) => {
  const id = +(req.params.id);
  console.log(id);
  const product = data.data.find(p => {
    return p.id === id;
  })
  console.log(product);
  res.status(200);
  res.write(`<h1>Products Page</h1>`);
  if (product) {
    res.write(`<h2>Product ${product.id} : ${product.name} </h2>`);
  } else {
    res.write(`<h2>Product not found</h2>`);
  }
}
exports.deleteData = (req, res) => {
  const id = +(req.params.id);
  const newData = data.data.filter(p => p.id !== id);
  data.data = newData;
}


exports.getHomePage = (req, res) => {
  res.status(200);
  res.write('<h1>Home Page</h1>');
}
exports.getProductsPage = (req, res) => {
  res.status(200);
  res.write('<h1>Products Page</h1>');
  res.write('<ul>');
  res.write(`<li>Product 1  : ${data.data[0].name} </li>`);
  res.write(`<li>Product 2  : ${data.data[1].name} </li>`);
  res.write(`<li>Product 2  : ${data.data[2].name} </li>`);
  res.write('</ul>');
  res.end();
}

