const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema({
    boardFrom: {
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

const Board = mongoose.model('board', boardSchema);

module.exports = { Board }
