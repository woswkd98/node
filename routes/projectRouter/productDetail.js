var express  = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const requestSchema = require('../../model/projectSchema/requestSchema');
const biddingSchema = require('../../model/projectSchema/biddingSchema');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

/*
let requestSchema = mongoose.Schema({
    userId:{type:String, required:true}, 
    detail:{type:String, required:true},
    category:{type:String, required:true},
    uploadAt:{type:String, required:true},
    deadLine:{type:String, required:true},
    tags: [new mongoose.Schema({tag : String})]
});*/

router.post('/requestDetail', (req,res) => {    
    /*
        id, 
    
    */
    requestSchema.find(
        {
            $and :[ 
               {userId : req.body.id },
               {title : req.body.title}
            ]
        }).exec((err,rs) => {
            if(err) console.log(err);
            res.json(rs);
        })
})


let requestSchema2 = mongoose.Schema({
    title : {type:String, required:true},
    userId : {type:String, required:true}, 
    detail : {type:String, required:true},
    category : {type:String, required:true},
    uploadAt : {type:String, required:true},
    deadLine : {type:String, required:true},
    tags :[{a : String}]
});

var count = 0;
const RequestSchema2 = mongoose.model('request2', requestSchema2 );

/*
commentModel.create({
    auth : req.body.auth,
    post_id : req.body.post_id,
    parent_id : req.body.parent_id,
    title : req.body.title,
    body : req.body.body,
    createdAt : Date
  } , function (err, contact) {
    if (err) return res.json(err);
    res.json({
      rs : "작성 성공"
    })
  });
*/
router.post('/abcdefg', (req,res) => {
    count++;
    RequestSchema2.create( {
        title: "as" + count,
        userId : "1254r",
        detail : "21353",
        category : "123r54",
        uploadAt : "sdfbsdf",
        deadLine : "135dsg",
    }, function (err, contact) {
        contact.tags.push({a : "1231515" + count});
        res.json(contact);
    })
})

/*
let biddingSchema = mongoose.Schema({
    requestId : {type:String, required : true},
    userId : {type : String, required : true},
    price : {type:Number, required:true},
    optionText : {type:String, required:true},
    isSuccess : {type:Boolean, default : false}
});


*/


router.post('/biddingMembers', (req,res) => {
    biddingSchema.find(
        {
            requestId : req.body.requestId
        }) 
        .sort('~price')
        .exec((err,rs) => {
            if(err) console.log(err);
            res.json(rs);
    })
})

module.exports = router;


    
