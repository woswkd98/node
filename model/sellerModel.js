var mongoose = require('mongoose');


var sellerModel = mongoose.Schema({
    bidPrice:{type:String, required:true},
    body:{type:String, required:true},
    userID:{type:String, required:true},
    uploadAt:{type:Date, default:Date.now},
});
  
  // model & export
  var Seller = mongoose.model('sellerModel', sellerModel);
  module.exports = Seller;
  
  