const mongoose = require("mongoose");

 function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to mongoDB");
    }).catch((err)=>{
        console.log("Connection failed",err);
        process.exit(1);
    })
    
}

module.exports = connectToDB;