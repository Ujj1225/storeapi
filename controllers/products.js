const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } })
    .sort("name")
    .select("name price")
    .limit(10)
    .skip(5);

  res.status(200).json({ nbHits: products.length, products });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObject);
  // sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    // console.log(sortList); 
    //This prints the request like -name price
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (fields) {
    const filedList = fields.split(",").join(" ");
    // .select is used to select specific fields
    result = result.select(filedList);
  }
  // req.query always returns a string like {featured: 'false', page: '2'}
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page -1 ) * limit;
  result = result.skip(skip).limit(limit)
  // Total items; 23
  // now if limit is 7 then we will have 4 pages namely: 7 7 7 2
  // so for second page: page = 2 hence first 7 items will be skipped
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
