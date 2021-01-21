const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const config = require('./config/key');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const boardRouter = require('./routes/board');
const authRouter = require('./routes/auth');
const mongoose = require("mongoose");
const { auth } = require("./middleware/auth");

const connect = mongoose.connect( config.mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }
).then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/board', boardRouter);
app.use('/auth', authRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



            