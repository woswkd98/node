var express  = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
const commentModel = require('../model/commentModel');
const boardModel = require('../model/boardModel');
const verify = require('./common').jwtVertify;
router.post('/addComment', (req,res) => {
  /*
  

var commentSchema = mongoose.Schema({
    auth : {type:String, required:true},
    post_id : {type:Number},
    parent_id : {type:Number},
    title:{type:String, required:true},
    body:{type:String, required:true},
    createdAt:{type:String},
    updatedAt:{type:String},
  });
  
  */

  const rs = verify(req.body.id, req.body.token);
  if(rs !== true) return res.json({success : false});
  
  commentModel.create({
    auth : req.body.auth,
    parent_id : req.body.parent_id,
    title : req.body.title,
    body : req.body.body,
    createdAt : Date,
    child : [{child : Number}],    
  } , function (err, contact) {
    if (err) return res.json(err);
    res.json({
      rs : "작성 성공"
    })
  });
})



module.exports = router;