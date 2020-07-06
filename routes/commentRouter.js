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
  if(rs !== true) return res.json({success : "인증 실패"});
  
  commentModel.create({
    auth : req.body.auth,
    parent_id : req.body.parent_id,
    title : req.body.title,
    body : req.body.body,
    createdAt : Date,
    child : [{child : Number}],
    isActive : false,    
  } , function (err, contact) {
    if (err) return res.json(err);
    res.json({
      rs : "작성 성공"
    })
  });
})

router.post('/deleteComment', (req,res) => {

  let id = req.body.id;

  const rs = verify(id, req.body.token);
  if(rs !== true) return res.json({success : "인증 실패"});
  // 실제로 삭제 안함

  commentModel.updateOne({
    $and : [
      {post_id : req.body.post_id}, // 인덱스 확인후
      {auth : req.body.auth} // 작성자까지 같은지 확인
    ]}, 
    {   
      $set: 
      { 
        isActive : false,
      } 
  })
})

router.post('/editComment',(req,res) => {

  let id = req.body.id;

  const rs = verify(id, req.body.token);
  if(rs !== true) return res.json({success : "인증 실패"});
  // 실제로 삭제 안함

  commentModel.updateOne({
    $and : [
      {post_id : req.body.post_id}, // 인덱스 확인후
      {auth : req.body.auth} // 작성자까지 같은지 확인
    ]}, 
    {   
      $set: 
      { 
        isActive : false,
      } 
  })


})




router.post('/readComment',(req,res) => {

  let id = req.body.id;

  const rs = verify(id, req.body.token);
  if(rs !== true) return res.json({success : "인증 실패"});
  // 실제로 삭제 안함

  commentModel.updateOne({
    $and : [
      {post_id : req.body.post_id}, // 인덱스 확인후
      {auth : req.body.auth} // 작성자까지 같은지 확인
    ]}, 
    {   
      $set: 
      { 
        isActive : false,
      } 
  })


})



module.exports = router;