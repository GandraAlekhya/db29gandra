var express = require('express');
const batman_controlers= require('../controllers/batman'); 
var router = express.Router();

router.get('/', batman_controlers.batman_view_all_Page ); 
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('batman', { title: 'Search results batman' });
});

module.exports = router;