const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { Board } = require("../models/Board");
const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get('/', auth, (req, res) => {
    User.findOne({_id: req.user._id}, (err, user) => {
        if(user) return res.status(200).json({   
            id: req.user.id,
            email: req.user.email,
            nickname: req.user.nickname,
            entranceYear: req.user.entranceYear,
            school: req.user.school,
        })
        else return res.status(404).send();
    })
})

router.get('/profile', auth, (req, res) => {
    User.findOne({_id: req.user._id}, (err, user) => {
        if(user) return res.status(200).json({   
            id: req.user.id,
            nickname: req.user.nickname,
            school: req.user.school,
        })
        else return res.status(404).send();
    })
})

router.post('/update/nickname', auth, (req, res) => {
    console.log(req.body);
    User.findOneAndUpdate(
        {_id: req.body._id},
        {$set:{nickname: req.body.nickname}},
        {new: true},
        (err, user) => {
            console.log(err);
            if(user) return res.status(200).send();
            else return res.status(404).send();
        }
    )
})

router.post('/update/email', auth, (req, res) => {
    console.log(req.body);
    User.findOne({ _id: req.body._id }, (err, user) => {
        user.comparePassword(req.body.password , (err, isMatch ) => {
            if (!isMatch) return res.json({ changeSuccess: false, message: "비밀번호가 틀렸습니다." })
            else User.findOneAndUpdate(
                {_id: req.body._id},
                {$set:{email: req.body.email}},
                {new: true},
                (err, user) => {
                    console.log(user);
                    if(!user) return res.status(404).send();
                    else return res.json({ changeSuccess: true });
                }
            )
        })
    })
})

router.post('/update/password', auth, (req, res) => {
    console.log(req.body);
    User.findOne({ _id: req.body._id }, (err, user) => {
        user.comparePassword(req.body.oldPassword , (err, isMatch ) => {
            if (!isMatch) return res.json({ changeSuccess: false, message: "비밀번호가 틀렸습니다." })
            // else User.findOneAndUpdate(
            //     {_id: req.body._id},
            //     {$set:{password: req.body.newPassword}},
            //     {new: true},
            //     (err, user) => {
            //         console.log(user);
            //         if(!user) return res.status(404).send();
            //         else return res.json({ changeSuccess: true });
            //     }
            // )
        })
    })
})

router.post("/myBoard", (req, res) => {
    console.log(req.body);
    Board.find({ userFrom : req.body.userFrom })
        .exec((err, boards) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, boards })
        })
})

router.post('/withdrawal', auth, (req, res) => {
    console.log(req.body);
    User.findOne({ _id: req.body._id }, (err, user) => {
        user.comparePassword(req.body.password , (err, isMatch ) => {
            if (!isMatch) return res.json({ changeSuccess: false, message: "비밀번호가 틀렸습니다." })
            else User.deleteOne({_id: req.body._id}, (err, user) => {
                if(err) return res.status(404).send();
                else return res.json({ changeSuccess: true });
            });
        })
    })
})

module.exports = router;