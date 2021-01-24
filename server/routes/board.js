const express = require('express');
const router = express.Router();
const { Board } = require("../models/Board");
const { auth } = require("../middleware/auth");

//=================================
//             Board
//=================================

router.post('/register', (req, res) => {
    console.log(req.body);
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

router.post('/upload', (req, res) => {
    console.log(req.body);
    Board.findOne()
})


module.exports = router;