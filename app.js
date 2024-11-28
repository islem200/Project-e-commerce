require("dotenv").config();
const express = require("express");
const connectdb = require("./Db/db");

const commerceRoutes = require("./routes/commerceRoutes");
const Electronics = require("./models/commerce");

const userRoutes = require("./routes/userRoutes");


const app = express();
app.use(express.json());

connectdb();
app.use("/api/electronic", commerceRoutes);
app.use("/api/user", userRoutes );


// async function createElectronic() {
//   try {
//     await Electronics.create([
//       {
//         name:"Phone",
//         price:639,
//         Brand:"Sumsung Galaxy A15"
//       },
//       {
//         name:"Phone",
//         price: 1159,
//         Brand:"Sumsung Galaxy A25"
//       },
//       {
//         name:"Phone",
//         price:5699,
//         Brand:"Sumsung Galaxy S24 Ultra"
//       },
//       {
//         name:"Phone",
//         price:4499 ,
//         Brand:"Sumsung Galaxy S24 Plus"
//       },
//       {
//         name:"Phone",
//         price: 7399 ,
//         Brand:"iPhone 16 Pro"
//       },
//       {
//         name:"Phone",
//         price: 7300 ,
//         Brand:"iPhone 16"
//       },
//       {
//         name:"Phone",
//         price: 5200 ,
//         Brand:"iPhone 15"
//       },
//       {
//         name:"Phone",
//         price: 3600 ,
//         Brand:"iPhone 14"
//       },
//       {
//         name:"TV",
//         price:575,
//         Brand:"Toshiba"
//       },
//       {
//         name:"TV",
//         price:659,
//         Brand:"biolux"
//       },
//       {
//         name:"TV",
//         price: 679 ,
//         Brand:"TCL"
//       },
//       {
//         name:"TV",
//         price: 799,
//         Brand:"Sumsung"
//       },
//       {
//         name:"Airpods",
//         price: 399 ,
//         Brand:"JBL"
//       },
//       {
//         name:"Airpods",
//         price: 500 ,
//         Brand:"Apple"
//       },
//       {
//         name:"Airpods",
//         price: 319 ,
//         Brand:"JBL"
//       },
//       {
//         name:"Airpods",
//         price:265 ,
//         Brand:"Sumsung"
//       },
//       {
//         name:"Smart watch",
//         price: 2999 ,
//         Brand:"Apple"
//       },
//       {
//         name:"Smart watch",
//         price:2899 ,
//         Brand:"Apple"
//       },
//       {
//         name:"Smart watch",
//         price:2965 ,
//         Brand:"Apple"
//       },
//       {
//         name:"Smart watch",
//         price:2555 ,
//         Brand:"Apple"
//       }
//     ])
//     console.log("success")
    
//   } catch (error) {
//     console.error(error.message)
//   }
  
// }
// createElectronic()




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
