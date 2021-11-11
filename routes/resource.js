var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var batman_controller = require('../controllers/batman'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// batman ROUTES /// 
 
// POST request for creating a batman.  
router.post('/batman', batman_controller.batman_create_post); 
 
// DELETE request to delete batman. 
router.delete('/batman/:id', batman_controller.batman_delete); 
 
// PUT request to update batman. 
router.put('/batman/:id', 
batman_controller.batman_update_put); 
 
// GET request for one batman. 
router.get('/batman/:id', batman_controller.batman_detail); 
 
// GET request for list of all batman items. 
router.get('/batman', batman_controller.batman_list); 
 
module.exports = router; 