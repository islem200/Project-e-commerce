const validateCommerce = require("../utils/validateCommerce")
const Electronics = require("../models/commerce");

const getAllElectronic = async (req, res) => {
  try {
    const e_commerce = await Electronics.find();
    res.status(200).send(e_commerce);
  } catch (error) {
    res.status(500).send("Something went wrong", error.message);
  }
};

const getElectronicById = async (req, res) => {
  try {
    const id = req.params.id;
    const Electronic = await Electronics.findById(id);

    if (!Electronic) {
      return res.status(404).send("WE could not find item...");
    }

    return res.status(200).send(Electronic);
  } catch (error) {
    res.send("Something went wrong", error.message);
  }
};


const createElectronic = async (req, res) => {
  try {
    const { error } = validateCommerce (req.body);
  if (error) {
      return res.status(400).send(error.details[0].message);

  }

  let electronic= new Electronics({
      name: req.body.name,
  });

  product= await electronic.save()
  res.send(electronic)

}catch (error) {
    res.status(500).send("We could not create new Electronic");
  }
}
  
// const createElectronic = async (req, res)=>{
//   try {
//     const electronic = new Electronics({
//       name: req.body.name,
//       price: req.body.price,
//       brand: req.body.brand,
//     })
//     const elec = await electronic.save()
//     res.status(201).send(elec)
    
//   } catch (error) {
//     res.status(500).send("We could not create new Electronic");
    
//   }
// };

 const updateElectronic = async (req, res)=>{
   try {
    const id = req.params.id;
    const updateData = req.body;
    const elec = await Electronics.findByIdAndUpdate(id, updateData, { new: true });
    
    
    if (!elec) {
      return res.status(404).send({ message: "Electronic not found" });
    }
    res.status(200).send(elec);
    
   } catch (error) {
    
    res.status(500).send({ message: "Internal Server Error", error: error.message });
    
   }
 };
  const deleteElectronic = async (req, res)=>{
    try {
     const id = req.params.id;
     const result = await Electronics.findByIdAndDelete(id);
     res.status(200).send(result);



    
    } catch (error) {
     res.status(500).send({ message: "Internal Server Error", error: error.message });

    
    }
  };


module.exports = {
  getAllElectronic,
  getElectronicById,
  createElectronic,
  updateElectronic,
   deleteElectronic,
};
