

var express  = require('express');
var router = express.Router();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../model/userInfoModel');
const secretKey = require('../myConfig/jwtSecretKey')
// 내일해야할것 https://stackhoarder.com/2019/07/17/node-js-passport-js-jwt-token-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84/
// user id, pwd로 스키마 만들어서 비교 새로 만들어야함 
const bcrypt = require('bcrypt');
const { isTemplateExpression } = require('typescript');
const saltRounds = 10;

const isOverlap = async (userId) => {
    console.log(userId);
    return await UserModel.findOne({userId : userId}
      , (err, User) => {
        if(err)console.log(err);
        console.log(User, "isOverlap user");
        return User;
    })
}



/*
let userSchema = mongoose.Schema({
    userId:{type:String, required:true},
    hashedPwd:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
});

          id : this.idRef.value,
            pwd : this.pwdRef.value,
            name : this.nameRef.value,
            email : this.emailRef.value,
*/



//


passport.use('register', new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pwd',
    session: false,
  }, 
  async (id ,pwd, done) => {
  let error;
  let data = {
    id : id,
    pwd : 0,
  }
 
  
  console.log("순서 1");
  if(!checkPwd(id, pwd, error)) {
    console.log("pwd error");
    return;
  }  
  
  console.log("순서 2");
  let isOverlaped = await isOverlap(id);
  if(isOverlaped!== null) {
    console.log('중복');
    return done(null, false, 
      {
       message : "아이디 중복",
      }
    ); 
  }

  console.log("순서 3");
  await bcrypt.genSalt(saltRounds, async (err,salt) => {
    console.log("순서 4");
    
    await bcrypt.hash(pwd, salt, async(err,hash)=> {
      data.pwd = hash;
      console.log(data.pwd, pwd , "bcrypt.hash");
      return done(null, data);;
    })
  })
 
}));
const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: secretKey.secretKey,
};

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'id',
      passwordField: 'pwd',
      session: false,
    },
    async (id,pwd, done) => {
      let isOverlaped = await isOverlap(id);

      await bcrypt.compare(pwd, isOverlaped.hashedPwd).then(rs => {
        if(rs === true) {
          console.log("compare isTrue",rs);
          
          return done(null, rs);
        } 
        else {
          console.log("compare isFalse",rs);
          return done(null, rs);
        }
      })      

    }
  )
)
    
passport.use(
  'jwt',
  new JWTStrategy(opts, async (jwt_payload, done) => {
   
    let rs = await isOverlap(jwt_payload.id);
    console.log("abc");
    
    return done(null,rs);
  }),
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

module.exports = passport;