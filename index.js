const express = require("express");
const cors = require("cors");
const server = express();
const fs = require("fs");
require("dotenv").config();


const PORT = process.env.PORT || 2000;

server.use(cors());
server.use(express.json());


// routes

server.get("/", function(request, response){

    fs.readFile("db.json", function(error, result){
        if(error) throw new error;

        result = JSON.parse(result);
            
        if(result){
            response.send({
                        data: result
                        
                    })
        }
    })

})

server.listen(PORT, function(){
    console.log("Running on PORT: ", PORT)
})