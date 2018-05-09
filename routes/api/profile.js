const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: 'didnotstartwe',
    userProperty: 'payload'
});

const ctrlProfile = require('../../controllers/profile');
const ctrlAuth = require('../../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profile);

// authentication
router.post('/authentication', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;