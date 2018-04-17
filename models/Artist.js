const mongoose = require('mongoose');
const { Schema } = mongoose;
const artistSchema = new Schema({
    name: String,
    genre: String,
});

module.exports = mongoose.model('Artist', artistSchema);