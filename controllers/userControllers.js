const User = require("../models/user");
const user = require("../models/user");


const getAllUser = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send("Something went wrong", error.message);
    }
  };

  const getUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).send("WE could not find item...");
      }
  
      return res.status(200).send(user);
    } catch (error) {
      res.send("Something went wrong", error.message);
    }
  };

   const createUser = async (req, res) =>{
     try {
         const users = new User({
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           email: req.body.email,
           phone: req.body.phone,
           password: req.body.password
         })
         const use = await users.save()
         res.status(201).send(use)
        
       } catch (error) {
         res.status(500).send("We could not create new User");
        
       }
     };
    
     const updateUser = async (req, res)=>{
        try {
         const id = req.params.id;
         const updateData = req.body;
         const user = await User.findByIdAndUpdate(id, updateData, { new: true });
         
         
         if (!user) {
           return res.status(404).send({ message: "user not found" });
         }
         res.status(200).send(user);
         
        } catch (error) {
         
         res.status(500).send({ message: "Internal Server Error", error: error.message });
         
        }
      };

      const deleteUser = async (req, res)=>{
        try {
         const id = req.params.id;
         const users = await User.findByIdAndDelete(id);
         res.status(200).send(users);
    
    
    
        
        } catch (error) {
         res.status(500).send({ message: "Internal Server Error", error: error.message });
    
        
        }
      };
      
    
    
  

  
module.exports = {
    getAllUser,
     getUserById, 
     createUser,
     updateUser,
     deleteUser,
  };
  