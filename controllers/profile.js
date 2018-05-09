const mongoose = require('mongoose');
const User = mongoose.model('User');

// secure route
module.exports.profile = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private"
        });
    } else {
        User
        .findById(req.payload._id)
        .exec(function(err, user) {
            res.status(200).json(user);
        });
    }
};