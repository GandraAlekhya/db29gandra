const mongoose = require("mongoose") 
const batmanSchema = mongoose.Schema({ 
 actor: String, 
 age: Number,
 color: String

}) 
 
module.exports = mongoose.model("batman", batmanSchema)
