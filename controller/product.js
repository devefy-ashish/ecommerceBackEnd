const model = require("../model/Product");
const mongoose = require("mongoose");
const Product = model.Product;

// Add Single Product
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save().then((savedoc) => {
    res.status(201).json(savedoc);
  });
};

// Get ALL Products
exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};

// Get Single Product
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.find(id);
  res.json(product);
};

// Replace all object with supplied object data usng id - in this data may or may not be delete according to the supplied data
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json(product);
};

// Update the specific data  using id
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json(product);
};

// Delete the specific data  using id

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete({ _id: id });
  res.status(200).json(product);
};
