const express = require("express");
const bodyParser = require("body-parser");
const  { PORT } = require("./config/serverConfig");
const CityRepository = require('./repository/city_repository');
const ApiRoutes = require('./routes/index');
const app = express();


const setupandStartServer = async() =>{

 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :true}));  
     app.use('./api' , ApiRoutes );
    app.listen(PORT , () =>{
        console.log(`server started at ${PORT}`); 
         });
}
setupandStartServer();