const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boardId: {
        type: String
    },
    boardTitle: {
        type: String
    },
    boardContent: {
        type: String
    },
    boardLike: {
        type: String
    },
    boardWriter: {
        type: String
    },
    boardUpdated: {
        type: String
    }
},{ timestamps: true });

const Board = mongoose.model('board', boardSchema);

module.exports = { Board }