var mongoose = require('mongoose');

// schema
var postSchema = mongoose.Schema({
  post_id : {type:Number,required : true},
  auth : {type:String, required : true},
  title: {type:String, required:true},
  body: {type:String, required:true},
  createdAt:{type:Date},
  updatedAt:{type:Date},
});

// model & export
var Post = mongoose.model('post', postSchema);
module.exports = Post;
