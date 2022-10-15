var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name:'p.shanmugaprindha',
   email:'prindha@gmail.com',
   contact:'5963096356',
   fathersName:'R.palani',dob:'16.02.2001',
   age:'21',
   bloodgroup:'B+ve'});
   });
  


module.exports = router;
