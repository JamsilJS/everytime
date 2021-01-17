const express = require('express');
const app = express();
const PORT = process.env.port || 8080;
const registerRouter = require('./router/register');
const loginRouter = require('./router/login');
const boardRouter = require('./router/board');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./schema/db');
db.connect();
app.get('/', (req, res) => {
  res.send('listening');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/board', boardRouter);
app.listen(PORT, () => console.log('app is listening'));