const app = require('./app');
const dotenv = require("dotenv");

const databaseConnect = require('./config/database')


dotenv.config({path:"backend/config/config.env"});
databaseConnect();


const PORT =process.env.PORT || 5080



const server = app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);

})

// Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down The Server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
})