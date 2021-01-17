const express = require('express');
require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'aaa',
  port: 3306,
});



module.exports = db;