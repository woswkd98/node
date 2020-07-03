const express = require('express');
const mongoose = require('mongoose');
var UserInfo = require('../model/userInfoModel');
const secretKey = require('../myConfig/jwtSecretKey')
// bcrpyt https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const passport = require("./passport");
var router = express.Router();

/*

*/


router.post('/userRegister',async (req, res, next) => {
  let datas = req.body;
  let data = {
    userId : datas.id,
    hashedPwd : datas.pwd,
    name: datas.name,
    email : datas.email
  }
  console.log("userRegister");

  console.log("incomeUser",data);
  await passport.authenticate('register', async (err, user, info) => {

    data.hashedPwd = user.pwd;

    UserInfo.create(data,function (err, contact) {
      if(err) {
        console.log(err);
        return;
      } else {
        console.log('완료');
        
      }
    });
  })(req, res, next)

})

router.post('/login',async (req, res, next) => {

  await passport.authenticate('login',  (err, isLogin, info) => {
    if(isLogin === true) {
      // jwt 사인해 놨다가 다른곳에서 작성할때 jwt로 vertify시킨다 
      console.log(req.body.id,"req.body.id");
      console.log(secretKey.secretKey,"key");
      const token = jwt.sign(
        { 
          exp: Math.floor(Date.now() / 1000) + (60 * 60), //1 시간
          id : JSON.stringify(req.body.id),
        }, secretKey.secretKey, {});
        console.log(token);
        
        res.json({
          auth: req.body.id,
          token: token,
          message: 'user found & logged in',  
      });
    } else {
      res.json({
        auth: null,
        token: '',
        message: 'user not login',
      })
    }
  })(req, res, next)
});





module.exports = router;





