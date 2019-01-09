const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('../config.js');

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
    User.findOne({email: req.body.email.toLowerCase()}, (err, obj) => {
        if (err) return res.status(500).send("Problem finding user in database");
        if(bcrypt.compareSync(req.body.password, obj.password)) {
            let user = {
                username: obj.username,
                role: obj.role
            }

            jwt.sign({user}, config.secret, (err, token) => {
                res.json({token});
                console.log(token);
            });
        }
    });
});

router.get('/dashboard', verifyToken, (req, res) => {
    jwt.verify(req.token, config.secret, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({authData});
        }
    });
    console.log("Hello there!");
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        req.token = bearerTokenre;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;
