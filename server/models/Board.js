const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Comment } = require("../models/Comment");

const boardSchema = mongoose.Schema({
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

boardSchema.pre('findOneAndDelete', function(next) {
    var Board = this;
    // console.log(Board);
    Comment.findOneAndDelete({boardFrom: Board._conditions._id})
        .exec((err, result) => {
            return {success : true}
        })
    next();
})

const Board = mongoose.model('Board', boardSchema);
module.exports = { Board }