const mongoose  = require("mongoose");

const blacklistSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"token not found , Invalid access"]
    }
},{
    timestamps:true
});

const blackListModel = mongoose.model("blacklist",blacklistSchema);

module.exports = blackListModel;