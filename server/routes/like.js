const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");

//=================================
//              Like
//=================================

// 데이터베이스에서 좋아요 숫자 가져오기
router.post('/likeCounts', (req, res) => {
    // console.log('LCreq', req.body);
    Like.find({boardFrom: req.body.boardFrom})
        .exec((err, likes) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, likes, likeCounts: likes.length });
        })
})

// 데이터베이스에서 내가 이 게시글을 좋아요 했는지 정보 가져오기
router.post("/liked", (req, res) => {
    // console.log('likedreq', req.body);
    Like.find({ userFrom : req.body.userFrom , boardFrom : req.body.boardFrom})
        .exec((err, likes) => {
            if(err) return res.status(400).send(err);
            let result = false;
            if(likes.length !== 0) {
                result = true;
            }
            return res.status(200).json({ success: true, liked: result });
        }) 
})

//프론트에서 좋아요한 게시글 데이터베이스에 저장하기
router.post('/', (req, res) => {
    // console.log(req.body);
    const like = new Like(req.body);
    like.save((err, likes) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true });
    })
})

//프론트에서 좋아요 취소한 게시글 데이터베이스에서 삭제하기
router.post('/dislike', (req, res) => {
    // console.log(req.body);
    Like.findOneAndDelete({ userFrom: req.body.userFrom, boardFrom: req.body.boardFrom})
        .exec((err, likes) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, likes })
        })
})

//마이페이지 좋아요한 게시글 클라이언트에 보내기
router.post('/likes', (req, res) => {
    // console.log('likes',req.body);
    Like.find({userFrom: req.body.userFrom})
        .exec((err, likes) => {
            console.log(likes);
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, likes })
        })
})



module.exports = router;