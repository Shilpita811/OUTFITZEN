const app = require('./app');
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");


const databaseConnect = require('./config/database')


dotenv.config({path:"backend/config/config.env"});
databaseConnect();


const PORT =process.env.PORT || 5080



const server = app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);

})
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down The Server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
})