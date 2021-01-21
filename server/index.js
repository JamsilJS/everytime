const express = require('express');
const mongoose = require("mongoose");
const config = require('./config/key');
const app = express();
const { auth } = require('./middleware/auth');
const { User } = require('./models/User');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


mongoose.connect(
        config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        }
    ).then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to Serverside')
})

app.get('/api/landing', (req, res) => {
    res.send('Welcome, You are in Landing Page')
})

// Register Route 
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) return res.json({
            success: false,
            message: err,
        })
        return res.status(200).json({
            success: true
        })
    })
})

// Login Route 
app.post('/api/users/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당되는 유저가 없습니다."
            })
        }
        user.comparePassword(req.body.password , (err, isMatch ) => {
            if (!isMatch)
            return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})

            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                res.cookie('x_auth', user.token)
                .status(200)
                .json({ loginSuccess: true, userId: user._id })
            })
        })
    })
})

// Auth Route 
app.get('/api/users/auth', auth , (req, res) => {
    res.status(200).json({   
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

// LogOut Route
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user._id }, 
        { token: ""},
        (err, user) => {
            if(err) return res.json({ success: false, err});
            return res.status(200).send({ 
                success: true,
            })
        }
    )
})

const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



            