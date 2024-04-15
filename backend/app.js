const express = require ('express');
const app = express();
const dotenv = require('dotenv');


dotenv.config({path:"backend/config/config.env'"});
app.use(express.json());
const user = require("./routes/userroutes");
app.use("/api/user",user);




module.exports = app;