const mongoose = require('mongoose');

let sellerSchema = mongoose.Schema({
    userId:{type:String, required:true},
    reiviewId : {type:String, required : true},
    detail : {type:String, required : true},
    portfolioImgLink : [new mongoose.Schema({tag : String}, {_id : false})]
});

const UserInfo = mongoose.model('userInfo', sellerSchema );

module.exports = UserInfo;
