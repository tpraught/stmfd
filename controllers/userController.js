const passport = require('passport');
const User = require('../models/user');

const userController = {
    isLoggedIn(req, res, next) {
      
      // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
   
      if (req.isAuthenticated && req.isAuthenticated()) {
        if (typeof next === 'function') {
          return next();
        }
        return res.json({ user: req.user });
      }
  
      // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE,
      // or atleat don't return priviledged data
      return res.status(401).json({ user: null });
    },
    register(req, res) {
      const data = {
        username: req.body.username,
        email: req.body.email,
        fullname: req.body.fullname
      };
      console.log('data on user registration: ', data);
      User.register(new User(data), req.body.password, (err, user) => {
        if (err) {
   
          console.log('error', err);
          return res.json(err);
        }
        return passport.authenticate('local')(req, res, () => {
      
          res.json({ user });
        });
      });
    },
    // Post login
    login   (req, res) {
    
      passport.authenticate('local')(req, res, () => {
  
        User.findOne({username:req.body.username})
              
          .then(result => {
            console.log("userController line 53", result);
            res.json({ user: result })});
      });
    },
    // logout
    logout(req, res) {
      console.log("usercontroller is logging out")
      req.logout();
      res.json({ user: null });
    },
    getCurrentUser(req, res) {
    
      if (req.isAuthenticated && req.isAuthenticated()) {
      // if (req.user && req.user._id) {
        console.log("user controller 65", req.user);
        
        return res.json({ user: req.user });
      } else {
        console.log("User not authenticated")
        return res.json({ user: null });
      }
    
    }
  };
  
  module.exports = userController;
  