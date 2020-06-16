
var express  = require('express');
var router = express.Router();
let surveyModel =require('../model/surveyModel')

var path = 'http://localhost:3000/'



router.get( 
    '/surveyList', async (req, res)=> {
      
      //getCount(res).then(val => res.json(val));  
    
      //count
      let manCat = 0; // 0 true
      let manDog = 0; // 1 true
      let womanCat = 0;// 0 false
      let womanDog = 0; // 1 false
      
   
        /*
       manCat = await surveyModel.find({animal : 0, sex : true}).countDocuments(
          (err, count) => {
          if(err) return res.json(err);

          return count;
      })*/
      manCat = await surveyModel.countDocuments({animal : false, sex : true},
        (err, count) => {
        if(err) return res.json(err);

        return count;
    })

      manDog = await surveyModel.countDocuments({animal : true, sex : true},
         (err, count) => {
        if(err) return res.json(err);
    
        return count;
      }) 
  
      womanCat=  await surveyModel.countDocuments({animal : false, sex : false},
         (err, count) => {
        if(err) return res.json(err);
        return count;
      }) 
      
      womanDog = await surveyModel.countDocuments({animal : true, sex : false},
          (err, count) => {
          if(err) return res.json(err);
          console.log(count);
            
          return count;
      }) 

  
      console.log(manCat,manDog,womanCat,womanDog);
      
      
      res.json({
        manCat : manCat,
        manDog : manDog,
        womanCat : womanCat,
        womanDog : womanDog,
      })
      
      
  
 /*
    getCount().then((val) => {
      console.log(val);
      
      res.json(val);
    })
*/

  });    
  
    router.post('/',function (req, res) {

      surveyModel.create(req.body, function (err, contact) {
          console.log(req.body);
          
        if (err) return res.json(err);
      });
      
    });
    
  module.exports = router;


  


