require("dotenv").config();

// Async errors

const express = require("express");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1> <a href= "/api/v1/products">products route</a>');
});

// Products route

app.use(errorHandlerMiddleware);
app.use(notFound);
