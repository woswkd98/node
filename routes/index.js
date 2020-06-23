const express = require('express');
const router = express.Router();
let cors = require('cors');
var app = express()

const boardRouter = require('./boardRouter');
const userRouter = require('./userRouter');
const surveyRouter = require('./surveyRouter');
const passport = require('passport');
app.use(cors())
router.use(passport.initialize());
router.use(passport.session());
router.use('/board',boardRouter);
router.use('/user',userRouter);
router.use('/survey',surveyRouter);

router.get('/', (req, res) => res.json({data:'this is index.'}));





module.exports = router;