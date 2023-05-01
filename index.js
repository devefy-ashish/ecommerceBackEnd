const express = require("express");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/User");
const todoRouter = require("./routes/Todo");

//bodyParser
server.use(express.json());
server.use("/api/products", productRouter.router);
server.use("/api/user", userRouter.router);
server.use("/api/todo", todoRouter.router);

server.listen(5000, () => {
  console.log("server started");
});
