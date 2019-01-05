const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

const User = require('../models/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res) => {
    let hashPassword = bcrypt.hashSync(req.body.password);
    let user = new User({
        username: req.body.username,
        password: hashPassword,
        email: req.body.email.toLowerCase()
    });

    user.save((err, user) => {
        if (err) return res.status(500).send("Problem saving data in database");
        res.status(200).send(user);
    });
});

router.post('/login', (req, res) => {
    console.log(req.body);
    User.findOne({email: req.body.email.toLowerCase()}, (err, obj) => {
        if (err) return res.status(500).send("Problem finding user in database");
        if(bcrypt.compareSync(req.body.password, obj.password)) {
            // redirect them to new page
            // setup JWT session
            res.status(303).send("User authenticated, redirecting page");
        }
    });
});

module.exports = router;
