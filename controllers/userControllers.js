const User = require("../models/user");
const validateUser = require("../utils/validateUser");
const validateLogin = require("../utils/validateLogin");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    //validate user
    const { error } = validateUser(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    //check if the user exist

    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).send("User Already Exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //register user
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin,
    });
    await user.save();
    res.send(_.pick(user, ["_id", "name", "email"]));
    // res.status(201).json({
    //   message: "User is registered",
    //   user: { id: user._id, name: user.name },
    // });
  } catch (error) {
    res.status(500).send("Error:", error);
  }
};

const login = async (req, res) => {
  try {
    //validate login
    const { error } = validateLogin(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    //check if the user exist

    let user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }
    // req.session.user = { id: user._id, isAdmin: user.isAdmin, name: user.name };
    // res
    //   .status(200)
    //   .json({ message: "Login successful", user: req.session.user });
    //or: send(req.session.user)
    const token = user.generateWebToken();
    res.send({token, user});
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCurrentUser = async (req, res) =>{
  try {
    const user = await User.findById(req.user._id).select('-password');
    return res.status(200).send(user);
  } catch (error) {
    res. status(500).send(error)
    
  }
}
// const getLoggedInUser = async (req, res) => {
//   if (!req.session.user)
//     return res.status(401).send({ error: "Not authenticated" });
//   res.send({ user: req.session.user });
// };

// const logoutUser = (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.status(500).json({ error: "Failed to logout." });
//     }
//     res.status(200).json({ message: "Logged out successfully." });
//   });
// };

module.exports = {
  register,
  login,
  getCurrentUser
  // getLoggedInUser,
  // logoutUser,
};
