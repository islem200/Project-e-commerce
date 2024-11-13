const express = require("express");
 const router = express.Router();
 const Accessorize = require("../models/commerce"); 

 const{
    getAllAccessorize,
    getAccessorizeById, 
    // createAccessorize,
    // updateAccessorize,
    // deleteAccessorize,

 } = require("../controllers/commerceControllers");

 router.get("/", getAllAccessorize,);
  router.get("/:id", getAccessorizeById);
//  router.post("/", createAccessorize);
//  router.put("/:id", updateAccessorize)
//  router.delete("/:id", deleteAccessorize);

 module.exports = router;