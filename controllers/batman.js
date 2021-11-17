var batman = require('../models/batman'); 
 

 
// for a specific batman. 
exports.batman_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await batman.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle batman create on POST. 
exports.batman_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new batman(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"batman_type":"goat", "cost":12, "size":"large"} 
    document.actor = req.body.actor; 
    document.age = req.body.age; 
    document.color = req.body.color; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle batman delete form on DELETE. 
exports.batman_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await batman.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   }; 
 
// Handle batman update form on PUT. 
exports.batman_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await batman.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.actor)  
               toUpdate.actor = req.body.actor; 
        if(req.body.age) toUpdate.age = req.body.age; 
        if(req.body.color) toUpdate.color = req.body.color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// List of all batmans 
exports.batman_list = async function(req, res) { 
    try{ 
        thebatmans = await batman.find(); 
        res.send(thebatmans); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.batman_view_all_Page = async function(req, res) { 
    try{ 
        thebatmans = await batman.find(); 
        res.render('batman', { title: 'batman Search Results', results: thebatmans }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.batman_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await batman.findById( req.query.id)
    res.render('batmandetail',
   { title: 'batman Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };