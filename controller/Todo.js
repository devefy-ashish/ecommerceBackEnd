const fs = require("fs");
const data = JSON.parse(fs.readFileSync("tododata.json", "utf-8"));
const todo = data.todos;

exports.createProduct = (req, res) => {
  console.log(req.body);
  todo.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.json(todo);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = todo.find((p) => p.id === id);
  res.json(product);
};
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = todo.findIndex((p) => p.id === id);
  todo.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = todo.findIndex((p) => p.id === id);
  const product = todo[productIndex];
  todo.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = todo.findIndex((p) => p.id === id);
  const product = todo[productIndex];
  todo.splice(productIndex, 1);
  res.status(201).json(product);
};
