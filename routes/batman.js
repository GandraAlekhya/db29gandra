var express = require('express');
const batman_controlers= require('../controllers/batman'); 
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET home page. */
router.get('/', batman_controlers.batman_view_all_Page ); 
router.get('/detail', batman_controlers.batman_view_one_Page);
router.get('/create',secured, batman_controlers.batman_create_Page);
router.get('/update',secured, batman_controlers.batman_update_Page);
router.get('/delete',secured, batman_controlers.batman_delete_Page); 

module.exports = router;