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

  console.log("incomeidpwd",req.body);
  await passport.authenticate('login', async (err, isLogin, info) => {
    if(isLogin === true) {
      // jwt 사인 필요
      const token = jwt.sign({ id: req.body.id }, secretKey.secretKey);
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





