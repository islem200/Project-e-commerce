require("dotenv").config();
const express = require("express");
const connectdb = require("./Db/db");

const commerceRoutes = require("./routes/commerceRoutes");
const Accessorize = require("./models/commerce");

const userRoutes = require("./routes/userRoutes");
const User = require("./models/user");

const app = express();
app.use(express.json());

connectdb();
app.use("/api/Accessorize", commerceRoutes);
app.use("/api/User", userRoutes )

// async function createCommerce() {
//   try {
//     await Accessorize.deleteMany({});
//     await Accessorize.create([
//       {
//         accessory_type: "Bags",
//         price: 100,
//         colors: ["black", "gray", "brown"],
//         brand: "Da Milano",
//         isPublished: true,
//       },

//       {
//         accessory_type: "Watch",
//         price: 150,
//         colors: ["white", "silver", "black"],
//         brand: "Rolex",
//         isPublished: true,
//       },

//       {
//         accessory_type: "jewellery",
//         price: 200,
//         colors: ["silver", "gold", "rose gold"],
//         brand: "Hermés",
//         isPublished: true,
//       },
//     ]);
//     console.log("Success");
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// createCommerce();



// async function createUser() {
//   try {
//     await User.deleteMany({});
//     await User.create([
//       {
//         firstName : "John",
//         lastName: "Doe",
//         email: "john.doe@example.com",
//         phone: "123-456-7890",
//         password: "password123"
//       },
//       {
//         firstName: "Jane",
//         lastName: "Smith",
//         email: "jane.smith@example.com",
//         phone: "987-654-3210",
//         password: "securePass1!"
//       },
//       {
//         firstName: "Michael",
//         lastName: "Johnson",
//         email: "michael.johnson@example.com",
//         phone: "555-123-4567",
//         password: "mikeSecure9"
//       },
//       {
//         firstName: "Emily",
//         lastName: "Davis",
//         email: "emily.davis@example.com",
//         phone: "444-555-6666",
//         password: "passwordEmily!"
//       },
//     ]
//     );
//     console.log("Success");
    
//   } catch (error) {
//     console.log(error.message);
    
//   }
  
// };
// createUser();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
