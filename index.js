const express = require("express");
const cors = require("cors");
const server = express();
const fs = require("fs");


const PORT = 2000;

server.use(cors());
server.use(express.json());


// routes

server.get("/get-land", function(request, response){

    fs.readFile("db.json", function(error, result){
        if(error) throw new error;

        result = JSON.parse(result);
            
        if(result){
            response.send({
                        data: result
                        
                    })
        }
    })

    


    
    // if(request.query.state != null){

    //     let state = request.query.state

    //     // for(let i= 0; i < land.length; i++){
    //     //     if(land[i].state === state){
    //     //        land_array = [];
    //     //        land_array.push(land[i]);
    //     //        response.send(land_array);
    //     //        break;
    //     //     }
    //     // }
    // }else{   
    //     response.send({
    //         message: "state retrieved...",
    //         data: [land],
    //         code: "success"
    //     })
    // }
})

server.listen(PORT, function(){
    console.log("Running on PORT: ", PORT)
})