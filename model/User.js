const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  username: String,
  password: String,
});

exports.User = mongoose.model("User", userSchema);
