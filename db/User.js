const mongoose = require('mongoose');


//===== This is Schema of user =======================//

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("users" ,userSchema);