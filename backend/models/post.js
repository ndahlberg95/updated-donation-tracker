const mongoose = require('mongoose');


const schema = mongoose.Schema({
    itemName: String,
    itemType: String,
    quantity: Number,
    size: String,
    color: String,
    timeDate:String

})


module.exports = mongoose.model("Post", schema)