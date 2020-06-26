var mongoose = require('mongoose');

// schema
var buyerModel = mongoose.Schema({
  title:{type:String, required:true},
  body:{type:String, required:true},
  uploadAt:{type:Date, default:Date.now},
  deadline:{type:Number, required:true},
  productDetail: {type:String, required:true},
});

// model & export
var Buyer = mongoose.model('buyerModel', buyerModel);
module.exports = Buyer;

