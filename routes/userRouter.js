const express = require('express');
const mongoose = require('mongoose');
var UserInfo = require('../model/userInfoModel');

// bcrpyt https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const passport = require("passport");
var router = express.Router();

/*

*/

/*
router.post('/userCheck',async (req, res) => {

  console.log("userCheck");
  
  let datas = req.body;
  let error = '';
  
  let data = {
    userId : datas.id,
    hashedPwd : datas.pwd,
    name: datas.name,
    email : datas.email
  }

  console.log(data.userId, data.hashedPwd,data.email, data.name);
  if(!checkPwd(data.userId, data.hashedPwd, error)) {
      console.log("pwd error");
      return;
  }  
  let isOverlaped = await isOverlap(data.userId);
  if(isOverlaped!== null) {
    console.log('중복');
     
    return;
  }

  await bcrypt.genSalt(saltRounds, async (err,salt) => {
      await bcrypt.hash(data.hashedPwd,salt, async(err,hash)=> {
        data.hashedPwd = hash;
        await UserInfo.create(data, (err, user) => {
  
          if(err) console.log(err);
      })
    })
  }) 
})


router.post('/login', 
  async (req, res) => {
    passport.authenticate('local', {session: false}, (err, user) => {
      if (err || !user) {
          return res.status(400).json({
              message: 'Something is not right',
              user   : user
          });
      }
  }
);


const  isOverlap = async (userId) => {
    console.log(userId);
    return await UserInfo.findOne({userId : userId}
      , (err, User) => {
        if(err)console.log(err);
        console.log(User);
        return User;
    })
}

*/



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

module.exports = router;





