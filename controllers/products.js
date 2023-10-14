const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async errors');
  const products = await Product.find({});
  res.status(200).json({ products });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ message: "products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
