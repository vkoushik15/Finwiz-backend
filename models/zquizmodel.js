const mongoose = require('mongoose');

const zquizSchema = new mongoose.Schema({
    name:String,
});
const Zquiz = mongoose.model('Zquiz', zquizSchema);

module.exports = Zquiz;

