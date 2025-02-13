const mongoose = require('mongoose');

const wtrSchema = new mongoose.Schema({
    name:String,
    
    password:String
});

const Wtr = mongoose.model('Wtr', wtrSchema);

module.exports = Wtr;
