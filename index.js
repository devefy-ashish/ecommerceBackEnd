const express = require("express"); // express import for use in project
require("dotenv").config(); // for unhide the specific details or restrict to upload specific filed to github
const path = require("path"); // path import for using directory static file available
const mongoose = require("mongoose"); // Mongoose Import for Database
const server = express(); // Express use for Server or APP creation
const productRouter = require("./routes/product"); // Router for Product API
const userRouter = require("./routes/User"); // Router for User API
const todoRouter = require("./routes/Todo"); // Router for TODO API

// DB Connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ravr4dt.mongodb.net/${process.env.DB_NAME}`
  );
  console.log("DB connected");
}

//bodyParser
server.use(express.json());
server.use("/api/products", productRouter.router);
server.use("/api/user", userRouter.router);
server.use("/api/todo", todoRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server started");
});
