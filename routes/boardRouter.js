var express  = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
const vertify = require('./common').jwtVertify
const postModel = require('../model/boardModel')

let counterSchema = mongoose.Schema( // 보드 인덱스에 대한 카운터
   { 
     name : {type:String, required: true},
     counter : Number,
   }
)


const counter = mongoose.model('boardCounter', counterSchema );
/*
  router.get = get post의 get 첫번째 파라미터는 경로
  router.post = get post의 post

*/
// 

counter.find({}).countDocuments(
    (err, count) => {
      return count;
    }).then((result) => {
        if(result === 0) {
          counter.create({
            counter : 0,
            name : 'boardIndex',
          }, (err, result) => {});
        }
        else console.log("이미 이 필드 있다");
    })


//Users.findOne().select('-_id name age') -는 걔를 뺀 나머지를 들고온다    
router.get( // 목록쪽에서 불러올 애들
  '/', (req, res) => {
      postModel.find({})
          .select('-_id auth post_id title createdAt updateAt') // 모델로 찾는다 {} 전체 
          .sort('~post_id')
          .exec((err, posts) => {
              if(err) return res.json(err);

              res.json({posts : posts}); // json파일로 보낸다
      });    
});


router.post('/board', (req,res) => {
 
  console.log(req.body.index,"getIndexBoard");
  
  const rs = vertify(req.body.id, req.body.token);
  if(rs=== true) {
    console.log(123154);
    
    postModel.find({
      post_id : req.body.index,
    }).exec((err, post) => {
      //if(err) return  console.log(err);
      console.log(post);
      
      res.json({post : post});
    })
  } else {
    console.log("rs false");
    res.json({post : null});
  }

})


router.post('/boardEdit', (req,res) => {

  const rs = vertify(req.body.id, req.body.token);
  if(rs === false) {
    return res.json({
      rs : "인증 만료"
    })
  }

  const updateDate = moment().format('YYYY-MM-DD HH:mm:ss');
  
  console.log(updateDate,"date");
  
  postModel.updateOne(

    { $and : [
      {post_id : req.body.post_id}, // 인덱스 확인후
      {auth : req.body.auth} // 작성자까지 같은지 확인
    ]}, 
    {   
      $set: 
      { 
        title: req.body.title,
        body : req.body.body,
        updatedAt : updateDate,
      }
     }).exec((err,rs) => {
       if(err) console.log(err);
       
  })

})


router.post('/boardNew',async function (req, res) {

  // let temp = req.body.posts.post_id + 1;
  // 인덱스 카운터를 늘려준다
  // $inc는 증가 또는 감소다 1했으면 1증가
  //findOneAndUpdate 찾아서 업데이트 시킨다
  //{new: true} 업데이트 된 문서를 반환해라

  
  //const rs = vertify("awetaweyt", "req.body.token");

  
  const rs = vertify(req.body.id, req.body.token);
  if(rs === false) {
    return res.json({
      rs : "인증 만료"
    })

  }
  let docCount = await counter.findOneAndUpdate(
    {name : 'boardIndex'}, {$inc : {counter : 1}}
     
  );
  let post =  new postModel();
  post.auth = req.body.id;
  post.post_id = docCount.counter;
  post.title = req.body.title;
  post.body = req.body.body;
  
  console.log(post.auth);
  
  
  post.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');  
  await postModel.create(post , function (err, contact) {
    if (err) return res.json(err);
    res.json({
      rs : "작성 성공"
    })
  });
});


// 삭제 
router.post('/delete', (req,res) => {
  const rs = vertify(req.body.id, req.body.token);
  if(rs === false) {
    return res.json({
      rs : "인증 만료"
    })
  }
  postModel.deleteOne(
    { $and : [ 
    {post_id : req.body.index},
    {auth :req.body.auth} ]
  }).exec((err, result) =>{
    if(err) console.log(err);
  })
})

module.exports = router;








/*
router.get("/BoardNew", function (req, res) {
  console.log("asdfa");
  /*
  postModel.create(req.body, function (err, contact) {
    if (err) return res.json(err)
 
  }); */
  
  



