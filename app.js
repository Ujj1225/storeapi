require("dotenv").config();
require('express-async-errors');

const express = require("express");

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const connectdb = require("./db/connect");
const productRouter = require("./routes/products");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1> <a href= "/api/v1/products">products route</a>');
});

// Setting up router
app.use("/api/v1/products", productRouter);

// Products route

app.use(errorHandlerMiddleware);
app.use(notFound);

// port
const port = process.env.PORT || 3000;

// Starting
const start = async () => {
  try {
    // Connect db
    await connectdb(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening to ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
