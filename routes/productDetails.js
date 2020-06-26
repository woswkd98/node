const express = require('express');

var UserInfo = require('../model/userInfoModel');
const secretKey = require('../myConfig/jwtSecretKey')
// bcrpyt https://www.npmjs.com/package/bcrypt

const jwt = require('jsonwebtoken');
const passport = require("./passport");
var router = express.Router();








