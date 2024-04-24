const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const errorMiddleware = require('./middleware/error');


dotenv.config({path:"backend/config/config.env'"});
app.use(express.json());
const user = require("./routes/userroutes");
const product=require("./routes/Productsroutes");
app.use("/api/product",product);
app.use("/api/user",user);

// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;