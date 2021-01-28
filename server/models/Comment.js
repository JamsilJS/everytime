const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boardFrom: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    commentContent: {
        type: String
    },
    commentWriter: {
        type: String
    }
},{ timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = { Comment }
