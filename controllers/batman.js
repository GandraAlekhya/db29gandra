var batman = require('../models/batman'); 
 

 
// for a specific batman. 
exports.batman_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: batman detail: ' + req.params.id); 
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
exports.batman_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: batman delete DELETE ' + req.params.id); 
}; 
 
// Handle batman update form on PUT. 
exports.batman_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: batman update PUT' + req.params.id); 
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
 