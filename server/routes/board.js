const express = require('express');
const router = express.Router();
const { Board } = require("../models/Board");
const { auth } = require("../middleware/auth");

//=================================
//             Board
//=================================

router.post('/upload', (req, res) => {
    // console.log(req.body);
    const board = new Board(req.body);
    board.save((err, board) => {
        if (err) return res.json({
            success: false,
            message: err,
        })
        return res.status(200).json({
            success: true
        })
    })
})

router.get('/getboard', (req, res) => {
    Board.find()
        .populate("boardFrom")
        .exec((err, boards) => {
            console.log(err);
            console.log(boards);
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, boards })
        })
})

router.post('/deleteBoard', (req, res) => {
    console.log(req.body);
    Board.findOneAndDelete({ boardFrom: req.body.boardFrom, _id: req.body._id})
        .exec((err, result) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true })
        })
})

router.post('/detail', (req, res) => {
    console.log(req.body);
    User.findOne({ "_id" : req.body.boardId }, (err, user) => {
        if(!user) return res.status(200).send();
        else return res.status(404).json({
            success: false
        })
    })
})


module.exports = router;