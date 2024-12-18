const validateCommerce = require("../utils/validateCommerce");
const Product = require("../models/product");

//get /api/products?category=electronic  // /api/products
const getAllProducts = async (req, res) => {
  try {
    if (req.query.category) {
      const { category } = req.query;

      const products = await Product.find({
        category,
      });

      res.status(200).send(products);
    } else {
      const products = await Product.find().limit(6);
      res.status(200).send(products);
    }
  } catch (error) {
    res.status(500).send("Something went wrong", error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("WE could not find item...");
    }

    return res.status(200).send(product);
  } catch (error) {
    res.send("Something went wrong", error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const { error } = validateCommerce(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let product = new Product({
      ...req.body,
    });

    product = await electronic.save();
    res.send(product);
  } catch (error) {
    res.status(500).send("We could not create new Electronic");
  }
};

// const createElectronic = async (req, res)=>{
//   try {
//     const electronic = new Product({
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

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const product = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!product) {
      return res.status(404).send({ message: "Electronic not found" });
    }
    res.status(200).send(product);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
