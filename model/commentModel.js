var express  = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");



var commentSchema = mongoose.Schema({
    auth : {type:String, required:true},
    post_id : {type:Number},
    parent_id : {type:Number},
    title:{type:String, required:true},
    body:{type:String, required:true},
    createdAt:{type:String},
    updatedAt:{type:String},
  });

var commentModel = mongoose.model('comment', commentSchema);

module.exports = commentModel;