
const mongoose = require('mongoose');

let requestSchema = mongoose.Schema({
    title : {type:String, required:true},
    userId : {type:String, required:true}, 
    detail : {type:String, required:true},
    category : {type:String, required:true},
    uploadAt : {type:String},
    deadLine : {type:Number, required:true},
    tags :[{tag : String, _id : false}] // _id 제거
});

const RequestSchema = mongoose.model('request', requestSchema );
module.exports = RequestSchema;