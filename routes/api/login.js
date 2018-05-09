const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../../client/src/components/Passport/Settings');
require('../../client/src/components/Passport/Passport');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = ("../../models/user");

// GET route for reading data
router.get('/', function (req, res, next) {
    return res.sendFile(path.join(__dirname + '../../client/src/pages/07_Admin_Login'));
});

router.post('/register', function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, message: 'enter username and password'});
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save user
        newUser.save(function(err) {
            if (err) {
                return res.json({success: false, message: 'username already exists'});
            }
            res.json({success: true, message: 'created new user'});
        });
    }
});

router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({success: false, message: 'user not found'});
        } else {
            // password match?
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (isMatch && !err) {
                    // user found and pass is correct, create token
                    var token = jwt.sign(user.toJson(), settings.secret);
                    // return info
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.status(401).send({success: false, message: 'authentication failed'});
                }
            });
        }
    });
});

module.exports = router;