const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async errors');

  // The .find({}) finds all the products
  // Any property of the model inside .find will be found like here .find({featured: true})
  const products = await Product.find({
    featured: true,
    name: "vase table",
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  try {
    const { featured, company, name } = req.query;
    const queryObject = {};
    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObject.company = company;
    }
    if(name){
      queryObject.name = name;
    }
    console.log(queryObject);
    const products = await Product.find(queryObject);
    res.status(200).json({ products, nbHits: products.length });
  } catch (error) {
    res.status(500).json({ error: "An error occured!" });
  }
};

module.exports = { getAllProducts, getAllProductsStatic };
