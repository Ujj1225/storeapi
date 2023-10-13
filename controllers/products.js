const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ message: "product testing route" });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ message: "products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
