const { required } = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 255,
    },

    password: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 1024,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.hashPassword = async function (oldPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(oldPassword, salt);
  return hashedPassword;
};

userSchema.methods.generateWebToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },

    process.env.SECRET_KEY
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;
