const fs = require('fs');
const Model = require('../model/Product');
const Product = Model.Product;
const mongoose = require('mongoose');
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    console.log(savedProduct);
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save product to the database', message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const result = await Product.find({});

  res.json(result);
};

exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve product from the database', message: error.message });
  }
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete product from the database', message: error.message });
  }
};
