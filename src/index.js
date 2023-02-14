const express = require("express");
const bodyParser = require("body-parser");
const  { PORT } = require("./config/serverConfig");
const CityRepository = require('./repository/city_repository');
const ApiRoutes = require('./routes/index');
const db  = require('./models/index');
const {Airplane}  = require('./models/index');
const app = express();
app.use(express.static('src/views'));

const setupandStartServer = async() =>{

 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended :true}));  
     app.use('/api' , ApiRoutes );
     app.use('/' ,(req,res)=>{
        res.sendFile('./views/index.html');
     } );
    app.listen(PORT ,async () =>{
        console.log(`server started at ${PORT}`); 
       if(process.env.SYNC_DB){
        db.sequelize.sync({alter : true});
       }
      
    
    });
}
setupandStartServer();