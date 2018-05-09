const express = require('express');

const router = express.Router();

const User = require('../../models/user');

// POST to /find
router.post('/find', (req, res, next) => {
  // Get the requested user
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.json({ error: err });
    }
    if (!user) {
      return res.json({ error: 'Username not found' });
    }
    // later additions for chat
    const { username } = user;
    return res.json({ username });
  });
});

// GET User List.
router.get('/list', (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    return res.json(users);
  });
});

module.exports = router;
