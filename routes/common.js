const secretKey = require('../myConfig/jwtSecretKey')
const jwt = require('jsonwebtoken');
module.exports = {
    jwtVertify : (id, token) => {
        
        let temp = jwt.verify(token, secretKey.secretKey, (err, v) => {
            console.log(1);
            
            if(err) return false;
            else return v;
        })
        if(temp === false) return false;        
        console.log(2);
        temp = temp.id;
        if (temp.charAt(0) === '"' && temp.charAt(temp.length -1) === '"')
        {
            console.log(3);
            temp = temp.substr(1,temp.length -2);
            console.log(temp,"temp");
            
        }

        if(temp === id) {
          return true;
        }
        else {
          return false;
        }
    } 
}