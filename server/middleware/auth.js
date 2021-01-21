const { User } = require('../models/User');

let auth = (req, res, next) => {
    // 인증 처리를 하는 곳
    // Client Cookie에서 Token을 가져온다.
    let token = req.cookies.x_auth;
    // Token을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) 
            return res.json({ 
                isAuth: false, 
                error: true 
            })

        req.user = user;
        req.token = token;
        next();
    })
}

module.exports = { auth };

