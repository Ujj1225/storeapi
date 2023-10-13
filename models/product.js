const mongoose = require("mongoose");

// Schema bhitra properties are defined like here name is a property
// Property bhtra validations
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be specified"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    //Only these companies can be selected
  },
});

// This sets the name of model to product
module.exports = mongoose.model("Product", productSchema);
