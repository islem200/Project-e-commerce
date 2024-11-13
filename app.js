require("dotenv").config();
const express = require("express");
const connectdb = require("./Db/db");

const commerceRoutes = require("./routes/commerceRoutes");
const Accessorize = require("./models/commerce");

const app = express();
app.use(express.json());

connectdb();
app.use("/api/Accessorize", commerceRoutes);

async function createCommerce() {
  try {
    await Accessorize.deleteMany({});
    await Accessorize.create([
      {
        accessory_type: "Bags",
        price: 100,
        colors: ["black", "gray", "brown"],
        brand: "Da Milano",
        isPublished: true,
      },

      {
        accessory_type: "Watch",
        price: 150,
        colors: ["white", "silver", "black"],
        brand: "Rolex",
        isPublished: true,
      },

      {
        accessory_type: "jewellery",
        price: 200,
        colors: ["silver", "gold", "rose gold"],
        brand: "Hermés",
        isPublished: true,
      },
    ]);
    console.log("Success");
  } catch (error) {
    console.log(error.message);
  }
}
createCommerce();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
