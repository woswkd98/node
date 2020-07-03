const secretKey = require('../myConfig/jwtSecretKey')
const jwt = require('jsonwebtoken');
module.exports = {
    jwtVertify : (id, token) => {
        console.log(id,token);
        let temp = jwt.verify(token, secretKey.secretKey, (err, v) => {
            if(err) return false;
            else return v;
        })
        if(temp === false) return false;        
        temp = temp.id;
        if (temp.charAt(0) === '"' && temp.charAt(temp.length -1) === '"')
        {
            temp = temp.substr(1,temp.length -2);   
        }

        if(temp === id) {
          return true;
        }
        else {
          return false;
        }
    } 
}