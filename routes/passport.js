/*
var express  = require('express');
var router = express.Router();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../model/userInfoModel');
// 내일해야할것 https://stackhoarder.com/2019/07/17/node-js-passport-js-jwt-token-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84/
// user id, pwd로 스키마 만들어서 비교 새로 만들어야함 
const bcrypt = require('bcrypt');
const saltRounds = 10;

const isOverlap = async (userId) => {
    console.log(userId);
    return await UserModel.findOne({userId : userId}
      , (err, User) => {
        if(err)console.log(err);
        console.log(User);
        return User;
    })
}


//
router.use(new LocalStrategy({
  usernameField: 'userID',
}, async (userID, password, done) => {
    let isOverlaped = await isOverlap(userID);
    if(isOverlaped === null)
    {
      return '아이디가 없음'; // 아이디가 없고 
    }
    await bcrypt.compare(password, isOverlaped.hashedPwd, (err, result) => {
    if(result == true) {
      return done(null, userID, {message : 'login ok'});
  }
  }).catch(err => done(err));

}))


    
        

router.post('/login', 
  async (req, res) => {
    console.log(req.body);
    
    let user = req.body;
    console.log( req.body);
    
    let isOverlaped = await isOverlap(user.id);

    if(isOverlaped === null) 
    {
      console.log("해당 아이디가 없습니다");
      return;
    }
    console.log(isOverlaped.hashedPwd,'hashed');
    console.log(isOverlaped);
    console.log(user.pwd,'pwd');
    
    bcrypt.compare(user.pwd, isOverlaped.hashedPwd, function(err, result) {
      console.log('1',result);
      if(result == true) {
        const token = jwt.sign(user, 'your_jwt_secret');
        return res.json({
          isLogin : true,
          token : token,
        });
      }
      else res.json({
        isLogin : false,
        token : null
      });
    })
    //jwt 인증 발급
    
  }
);

        
        
     


const checkPwd = (id ,pwd, error) => {
  
  if(!/^[a-zA-Z0-9]{10,15}$/.test(pwd)) {            
    error = "패스워드의 최소길이는 10 최대 길이는 15입낟.";
    console.log("패스워드의 최소길이는 10 최대");
    return false;
  }
  var checkNumber = pwd.search(/[0-9]/g);
  var checkEnglish = pwd.search(/[a-z]/ig);

  if(checkNumber <0 || checkEnglish <0){
    error = "숫자와 영문자를 혼용하여야 합니다.";
    console.log("숫자와 영문자를 혼용하여야");
    return false;
  }

  if(/(\w)\1\1\1/.test(pwd)) {
    error = '같은 문자를 4번 이상 사용하실 수 없습니다.';
    console.log("같은 문자를 4번 이상 사용하실");
    return false;
  }

  if(pwd.search(id) > -1){
    error = '비밀번호에 아이디가 포함되었습니다';
    console.log("비밀번호에 아이디가1");
    return false;
  }

  return true;
}


module.exports = passport;*/