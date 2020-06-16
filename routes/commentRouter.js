var express  = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer'); // 파일업로드 모듈
var path = 'http://localhost:3000/'
let cors = require('cors');
router.use(cors());
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");



var commentSchema = mongoose.Schema({
    post_id : {type:Number, required:true},
    parent_id : {type:Number},
    title:{type:String, required:true},
    body:{type:String, required:true},
    createdAt:{type:String},
    updatedAt:{type:String},
  });
var commentModel = mongoose.model('Posts', commentSchema);

