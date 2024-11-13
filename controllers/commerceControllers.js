
const commerce = require("../models/commerce");
const Accessorize = require("../models/commerce");

const getAllAccessorize = async(req, res)=>{
    try {
        const e_commerce = await Accessorize.find();
        res.status(200).send(e_commerce)

        
    } catch (error) {
        res.status(500).send("Something went wrong", error.message)
        
    }
};

const getAccessorizeById = async(req, res)=>{
    try {
        const id = req.params.id
        const Accessory = await Accessorize.findById(id);

        if(!Accessory) {
            return res.status(404).send(Accessorize);
        }

        
    } catch (error) {
        res.status(500).send("Something went wrong", error.message);
        
    }
}

module.exports = {
    getAllAccessorize,
     getAccessorizeById, 
    // createAccessorize,
    // updateAccessorize,
    // deleteAccessorize,
}