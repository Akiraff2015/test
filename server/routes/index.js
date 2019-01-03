const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Testing API
router.get('/api/test', (req, res, next) => {
  res.json({a:1});
});

// TODO: implement register
router.post('/register', (req, res) => {

    console.log(req.body);
});

module.exports = router;
