const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
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

module.exports = router;