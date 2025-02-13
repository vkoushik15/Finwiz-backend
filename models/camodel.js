const mongoose = require('mongoose');

const caSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teamDetails: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ca', caSchema);
