const express = require('express');
const router = express.Router();
const db = require('../schema/db');

router.route('/')
  .post((req, res) => {
    console.log(req.body);
    const query = `INSERT everytime.user VALUES ('${req.body.id}', '${req.body.password}', '${req.body.nickname}', '${req.body.school}')`
    db.query(query, (err, result) => {
      if(err) res.status(404).send();
      else res.status(200).send();
    })
  });

router.route('/checkId/:id')
  .get((req, res) => {  //아이디 중복 확인
    const query = `SELECT id FROM everytime.user WHERE id='${req.params.id}';`;
    let status;
    db.query(query, (err, result) => {
      if(err || result.length) res.status(404).send();
      else res.status(200).send();
    });
  })

module.exports = router;