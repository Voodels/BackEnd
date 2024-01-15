// Import the necessary modules
import { Router } from "express";
import products from "../productsData.mjs";

// Create a router instance
const routerProducts = Router();

// Define the "/products" route
routerProducts.get('/products', (request, response) => {

  if (request.cookies.key === 'value') {
    console.log('Cookies: ', request.cookies)
    response.send(products);
    response.status(200)
  } else {
    response.status(401).send({ message: "Unauthorized cookie" });
  }


});

// Export the router
export default routerProducts;
