const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async errors');

  // The .find({}) finds all the products
  // Any property of the model inside .find will be found like here .find({featured: true})
  const products = await Product.find({
    featured: true,
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ message: "products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
