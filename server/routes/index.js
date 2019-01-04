const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

const User = require('../models/UserModel');

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
    let hashPassword = bcrypt.hashSync(req.body.password);
    let user = new User({
        username: req.body.username.toLowerCase(),
        password: hashPassword,
        email: req.body.email
    });
    user.save(err => console.log(err));
});

router.post('/login', (req, res) => {
    console.log(req.body);
    User.findOne({email: req.body.email.toLowerCase()}, (err, obj) => {
        // If the hash matches
        if(bcrypt.compareSync(req.body.password, obj.password)) {

        }
    });
});

module.exports = router;
