var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Testing API
router.get('/api/test', (req, res, next) => {
  res.json({a:1});
});

module.exports = router;
