const User = require('../models/user')
const validateUser = require ('../utils/validateUser')
const _ = require('lodash')

const register = async(req, res)=>{
  //validate user
  const {error} = validateUser(req.body);

  if(error){
    return res.status(400).send(error.details[0].message);
  }
  //check if the user exist

  let user = await User.findOne({
    email: req.body.email,
  });

  if(user){
    return res.status(400).send('User Already Exist')
  }

  //register user
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  await user.save()
  res.send(_.pick(user, ['_id', "name","email"]))
}

module.exports = {
  register
}
  