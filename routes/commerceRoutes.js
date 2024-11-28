const express = require("express");
 const router = express.Router();
 const Electronics = require("../models/commerce"); 

 const{
    getAllElectronic,
    getElectronicById, 
     createElectronic,
     updateElectronic,
     deleteElectronic,

 } = require("../controllers/commerceControllers");

 router.get("/", getAllElectronic,);
  router.get("/:id", getElectronicById);
  router.post("/", createElectronic);
  router.put("/:id", updateElectronic)
  router.delete("/:id", deleteElectronic);

 module.exports = router;