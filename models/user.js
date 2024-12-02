const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 name:{
  type: String,
  required: true,
  minLength: 5,
  maxLength: 50
 },

 email: {
  type: String,
  required: true,
  unique: true,
  minLength: 5,
  maxLength: 255
 },

 password:{
  type: String,
  required: true,
  minLength: 5,
  maxLength: 1024
 }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
