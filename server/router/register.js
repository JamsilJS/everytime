const express = require('express');
const router = express.Router();
const db = require('../schema/db');

router.route('/')
  .post((req, res) => {
    console.log(req.body);
    const query = `INSERT everytime.user VALUES (${req.id}, ${req.password}, ${req.nickname}, ${req.school})`
    res.send('hii');
  });

router.route('/checkId/:id')
  .get((req, res) => {
    const query = `SELECT id FROM everytime.user WHERE id='${req.params.id}';`;
    let status;
    db.query(query, (err, result) => {
      if(err || result.length) res.status(404).send();
      else res.status(200).send();
    });
  })

module.exports = router;