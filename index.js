const express = require("express");
const connection = require("./models/connection");
const productRouter=require("./routes/product");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/products",productRouter);

module.exports =app;