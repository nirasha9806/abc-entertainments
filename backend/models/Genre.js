const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = mongoose.Schema({
    genre: {
        type: String
    }

},{ timesamps: true})

const Genre = mongoose.model('Genre', genreSchema);

module.exports = {Genre}