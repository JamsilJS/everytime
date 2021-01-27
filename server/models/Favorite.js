const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boardTitle: {
        type: String
    },
    boardContent: {
        type: String
    },
    boardWriter: {
        type: String
    }
},{ timestamps: true });

const Favorite = mongoose.model('favorite', favoriteSchema);
module.exports = { Favorite }