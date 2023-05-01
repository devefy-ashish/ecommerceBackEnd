const express = require("express");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/User");

//bodyParser
server.use(express.json());
server.use("/api/products", productRouter.router);
server.use("/api/user", userRouter.router);

server.listen(5000, () => {
  console.log("server started");
});
