// Insted of adding all data to database one by one. What we do is simply populate the data from the products.json
require("dotenv").config();

// Cating up model and connection for db
const connectDB = require("./db/connect");
// Product was the name of the model we defined
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    // Array can also be used to create products
    await Product.create(jsonProducts);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

start();
