const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");
const { Board } = require("../models/Board");

//=================================
//            Comment
//=================================

router.post('/getComment', (req, res) => {
    Comment.find({boardFrom: req.body.boardFrom})
        .sort({createdAt: -1})
        .exec((err, comments) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, comments, commentCounts: comments.length });
        })
})

router.post('/upload', (req, res) => {
    const comment = new Comment(req.body);
    comment.save((err, likes) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true });
    })
})

router.post('/deleteComment', (req, res) => {
    Comment.findOneAndDelete({ userFrom: req.body.userFrom, _id: req.body.id})
        .exec((err, result) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, result})
        })
})

router.post('/comments', (req, res) => {
    Comment.find({userFrom: req.body.userFrom})
        .populate("boardFrom")
        .sort({createdAt: -1})
        .exec((err, comments) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, comments })
        })
})



module.exports = router;