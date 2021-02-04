const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");

//=================================
//            Comment
//=================================

// 데이터베이스에서 댓글 숫자 가져오기
router.post('/getComment', (req, res) => {
    // console.log('LCreq', req.body);
    Comment.find({boardFrom: req.body.boardFrom})
        .sort({createdAt: -1})
        .exec((err, comments) => {
            // console.log('get',comments);
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, comments, commentCounts: comments.length });
        })
})

//프론트에서 댓글 단 게시글 데이터베이스에 저장하기
router.post('/upload', (req, res) => {
    // console.log(req.body);
    const comment = new Comment(req.body);
    comment.save((err, likes) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true });
    })
})

//프론트에서 댓글 삭제한 게시글 데이터베이스에서 삭제하기
router.post('/deleteComment', (req, res) => {
    // console.log(req.body);
    Comment.findOneAndDelete({ userFrom: req.body.userFrom, _id: req.body.id})
        .exec((err, result) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, result})
        })
})

//마이페이지 댓글 게시글 클라이언트에 보내기
router.post('/comments', (req, res) => {
    // console.log('comments',req.body);
    Comment.find({userFrom: req.body.userFrom})
        .sort({createdAt: -1})
        .exec((err, comments) => {
            console.log(comments);
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, comments })
        })
})



module.exports = router;