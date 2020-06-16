var mongoose = require('mongoose');



// schema
let surveySchema = mongoose.Schema({
    animal :{type:String, required:true},
    sex : {type:String, required:true},
});

const surveyModel = mongoose.model('survey', surveySchema );

module.exports = surveyModel;
