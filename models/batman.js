const mongoose = require("mongoose") 
const batmanSchema = mongoose.Schema({ 
 actor: {
    type: String,
    minlength: 3
},
 age: Number, 
 color: {
    type: String,
    minlength: 4
}, 
}) 
 
module.exports = mongoose.model("batman", 
batmanSchema)