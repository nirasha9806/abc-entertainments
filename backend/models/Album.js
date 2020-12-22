const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = mongoose.Schema({
    title: {
        type: String
    },

    artist:{
        type: String
    },

    genre: {
        type: String
    },

    date:{
        type: String
    }

},{ timesamps: true})

const Album = mongoose.model('Album', albumSchema);

module.exports = {Album}