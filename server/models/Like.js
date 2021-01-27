const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boardFrom: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    boardTitle: {
        type: String,
    },
    boardContent: {
        type: String,
    },
    boardWriter: {
        type: String,
    },
},{ timestamps: true });

const Like = mongoose.model('Like', LikeSchema);
module.exports = { Like }