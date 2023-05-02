const model = require("../model/User");
const User = model.User;

/// Create a single user in database
exports.createUser = (req, res) => {
  const adduser = new User(req.body);
  adduser.save().then((savedoc) => {
    res.status(201).json(savedoc);
  });
};

// GET all users from database
exports.getAllUsers = async (req, res) => {
  const getAllUserObject = await User.find();
  res.status(200).json(getAllUserObject);
};

// GET specific user from database using ID
exports.getUser = async (req, res) => {
  const id = req.params.id;
  const getUserObject = await User.findById({ _id: id });
  res.json(getUserObject);
};

// PUT the specific data into the database using id - data may or may not delete according to supplied data
exports.replaceUser = async (req, res) => {
  const id = req.params.id;
  const replaceobject = await User.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json(replaceobject);
};
// Update the specific data into the database using id - specific data updated
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const updateobject = await User.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json(updateobject);
};

// delete user
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const delteobject = await User.findByIdAndDelete(id);
  res.status(200).json(delteobject);
};
