const commerce = require("../models/commerce");
const Accessorize = require("../models/commerce");

const getAllAccessorize = async (req, res) => {
  try {
    const e_commerce = await Accessorize.find();
    res.status(200).send(e_commerce);
  } catch (error) {
    res.status(500).send("Something went wrong", error.message);
  }
};

const getAccessorizeById = async (req, res) => {
  try {
    const id = req.params.id;
    const Accessory = await Accessorize.findById(id);

    if (!Accessory) {
      return res.status(404).send("WE could not find item...");
    }

    return res.status(200).send(Accessory);
  } catch (error) {
    res.send("Something went wrong", error.message);
  }
};

const createAccessorize = async (req, res)=>{
  try {
    const accessory = new Accessorize({
      accessory_type: req.body.accessory_type,
      price: req.body.price,
      colors: req.body.colors,
      brand: req.body.brand
    })
    const Acc = await accessory.save()
    res.status(201).send(Acc)
    
  } catch (error) {
    res.status(500).send("We could not create new Accessory");
    
  }
};

 const updateAccessorize = async (req, res)=>{
   try {
    const id = req.params.id;
    const updateData = req.body;
    const Acc = await Accessorize.findByIdAndUpdate(id, updateData, { new: true });
    
    
    if (!Acc) {
      return res.status(404).send({ message: "Accessory not found" });
    }
    res.status(200).send(Acc);
    
   } catch (error) {
    
    res.status(500).send({ message: "Internal Server Error", error: error.message });
    
   }
 };
  const deleteAccessorize = async (req, res)=>{
    try {
     const id = req.params.id;
     const result = await Accessorize.findByIdAndDelete(id);
     res.status(200).send(result);



    
    } catch (error) {
     res.status(500).send({ message: "Internal Server Error", error: error.message });

    
    }
  };


module.exports = {
  getAllAccessorize,
  getAccessorizeById,
  createAccessorize,
  updateAccessorize,
   deleteAccessorize,
};
