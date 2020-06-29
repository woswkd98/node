var mongoose = require('mongoose');

// schema
var postSchema = mongoose.Schema({
  auth : {type:String, required : true},
  title:{type:String, required:true},
  body:{type:String, required:true},
  createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date},
});

// model & export
var Post = mongoose.model('post', postSchema);
module.exports = Post;

