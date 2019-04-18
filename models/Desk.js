const mongoose = require('mongoose');
const { Schema } = mongoose;
const deskSchema = new Schema({
    desks: [{
        code: String,
        status: String
    }]
});

module.exports = mongoose.model('Desk', deskSchema);