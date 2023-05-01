const express = require("express");
const server = express();
const productRouter = require("./routes/product");

//bodyParser
server.use(express.json());
server.use("/api/products", productRouter.router);

server.listen(5000, () => {
  console.log("server started");
});
