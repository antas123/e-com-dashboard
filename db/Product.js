const mongoose = require('mongoose');


//===== This is Schema of Products =======================//

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId : String,
    company : String
});

module.exports = mongoose.model("products" ,productSchema);