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

const passportJWT = require('passport-jwt');

let counterSchema = mongoose.Schema( // 보드 인덱스에 대한 카운터
   { 
     name : {type:String, required: true},
     counter : Number,
   }
)

// schema
var postSchema = mongoose.Schema({
  
  post_id : {type:Number, required:true},
  title:{type:String, required:true},
  body:{type:String, required:true},
  createdAt:{type:String},
  updatedAt:{type:String},
});



// model & export
var postModel = mongoose.model('Posts', postSchema);
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
          }, (err, result) => {

          })

        }
        else console.log("이미 이 필드 있다");
    })


//Users.findOne().select('-_id name age') -는 걔를 뺀 나머지를 들고온다    
router.get( // 목록쪽에서 불러올 애들
  '/', (req, res) => {
      postModel.find({})
          .select('-_id post_id title createdAt') // 모델로 찾는다 {} 전체 
          .sort('~post_id')
          .exec((err, posts) => {
              if(err) return res.json(err);
              res.json({posts : posts}); // json파일로 보낸다
      });    
});


router.post('/board', (req,res) => {
 
  console.log(req.body.index,"getIndexBoard");
  
  postModel.find({
    post_id : req.body.index,
  }).exec((err, post) => {
    if(err) return res.json(err);
    res.json({post : post});
  })
})


router.post('/boardEdit', (req,res) => {

  const updateDate = moment().format('YYYY-MM-DD HH:mm:ss');
  
  console.log(updateDate,"date");
  
  postModel.updateOne( 
    { post_id : req.body.post_id }, 
    { $set: 
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


  let docCount = await counter.findOneAndUpdate(
    {name : 'boardIndex'}, {$inc : {counter : 1}}
     
  
  );

  let post =  new postModel();
  post.post_id = docCount.counter;
  post.title = req.body.title;
  post.body = req.body.body;
  
  
  post.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');  
  await postModel.create(post , function (err, contact) {
    if (err) return res.json(err);
    console.log(post.post_id, post.title, post.body, post.createdAt);
  });
});


// 삭제 
router.post('/delete', (req,res) => {
 
  console.log(req.body.index, 'delete');

  postModel.deleteOne({
    post_id : req.body.index,
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
  
  



