const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: "backend/config/config.env"});

mongoose.set('strictQuery', false);


const databaseConnect =  () => {
    mongoose.connect(process.env.MONGO_URL ,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
}

module.exports = databaseConnect;

