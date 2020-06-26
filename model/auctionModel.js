var mongoose = require('mongoose');

var auction = mongoose.Schema({
    lowestPrice:{type:String, required:true},
    User:{type:String, required:true},
});