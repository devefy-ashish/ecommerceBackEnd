const express = require("express");
const todoController = require("../controller/Todo");

const router = express.Router();

router
  .post("/", todoController.createProduct)
  .get("/", todoController.getAllProducts)
  .get("/:id", todoController.getProduct)
  .put("/:id", todoController.replaceProduct)
  .patch("/:id", todoController.updateProduct)
  .delete("/:id", todoController.deleteProduct);

exports.router = router;
