
const express = req('express');
const productRouter = express.Router();

import { getHomePage, getProductsPage, getProduct, deleteData } from '../controller/controller.js';

export const router = productRouter
  .get('/', getHomePage)
  .get('/products', getProductsPage)
  .get('/products/:id', getProduct)
  .post('/products', (req, res) => { })
  .put('/products/:id', (req, res) => { })
  .delete('/products/:id', deleteData);
