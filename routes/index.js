const express = require('express');
const router = express.Router();
let cors = require('cors');


const boardRouter = require('./boardRouter');
const userRouter = require('./userRouter');
const surveyRouter = require('./surveyRouter');
const passport = require('passport');
const biddingRouter = require('./projectRouter/productDetail')
const productEnroll = require('./projectRouter/productEnroll')
router.use(passport.initialize());
router.use(passport.session());
router.use('/board',boardRouter);
router.use('/user',userRouter);
router.use('/survey',surveyRouter);
router.use('/biding',biddingRouter);
router.use('/Enroll',productEnroll);
router.get('/', (req, res) => res.json({data:'this is index.'}));





module.exports = router;