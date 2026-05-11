const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:[true,"Username is required for creating an user"],
        unique:[true,"Username must be unique"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email must be unique"],
        // match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email address"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        // minlength:[6,"password must contain minimum of six characters"],
        select:false,
    }
});


// userSchema.pre("save",async function(next){
//      // Only hash the password if it's new or being modified
//     if(!this.isModified('password')) return next;
//       // Hash the password using a tool like bcrypt
//     this.password = await bcrypt.hash(this.password,10);
//     next(); 

// });

// userSchema.methods.comparePassword = async function(password){
//     return await bcrypt.compare(password,this.password);
// }
const userModel = mongoose.model("users",userSchema);

module.exports = userModel;