const express = require('express');
const passport = require('passport');
const User = require('../../models/admin.js');

const router = express.Router();

// GET route for reading data
router.get('/', function (req, res, next) {
    return res.sendFile(path.join(__dirname + '../../client/src/pages/07_Admin_Login'));
});

// POST to /login
router.post('/login', async (req, res) => {
    // look up by email
    const query = User.findOne({ email: req.body.email });
    const foundUser = await query.exec();

    // if exist add username to body
    if (foundUser) { req.body.username = foundUser.username; }

    passport.authenticate('local')(req, res, () => {
        // if logged in, user info
        if (req.user) {
            return res.send(JSON.stringify(req.user));
        }

        // error
        return res.send(JSON.stringify({ error: 'there was an error loffing in' }));
    }); 
});

// GET /logout
router.get('/logout', (req, res) => {
    req.logout();
    return res.send(JSON.stringify(req.user));
});

// POST to /register
router.post('/register', async (req, res) => {
    // make sure email doesn't exist
    const query = User.findOne({ email: req.body.email });
    const foundUser = await query.exec();
    if (foundUser) { 
        return res.send(JSON.stringify({ error: 'email or username already exists' })); 
    }

    // create user object to save
    if (!foundUser) {
        // sanitize data
        const window = (new JSDOM('')).window;
        const DOMPurify = createDOMPurify(window);
        const sanitizedBody = {
            username: DOMPurify.sanitize(req.body.username),
            email: DOMPurify.sanitize(req.body.email),
            firstName: DOMPurify.sanitize(req.body.firstName),
            lastName: DOMPurify.sanitize(req.body.lastName),
            password: req.body.password,
        };

        const newUser = new User(sanitizedBody);
        // passport method
        return User.register(newUser, req.body.password, (err) => {
            // error
            if (err) {
                return res.send(JSON.stringify({ error: err.message }));
            }
            // Otherwise log in
            return passport.authenticate('local')(req, res, () => {
                // if logged in user info to send back
                if (req.user) {
                    return res.send(JSON.stringify(req.user));
                }
                // error
                return res.send(JSON.stringify({ error: 'There was an error registering the user' }));
            });
        });
    }
  
    // all fail
    return res.send(JSON.stringify({ error: 'There was an error registering the user' }));
});

// //POST route for updating data
// router.post('/', function (req, res, next) {
//     // confirm that user typed same password twice
//     if (req.body.password !== req.body.passwordConf) {
//         var err = new Error('Passwords do not match.');
//         err.status = 400;
//         res.send("passwords dont match");
//         return next(err);
//     }

//     if (req.body.email &&
//         req.body.username &&
//         req.body.password &&
//         req.body.passwordConf) {

//     var userData = {
//         email: req.body.email,
//         username: req.body.username,
//         password: req.body.password,
//         passwordConf: req.body.passwordConf,
//     }

//     User.create(userData, function (error, user) {
//         if (error) {
//             return next(error);
//         } else {
//             req.session.userId = user._id;
//             return res.redirect('/profile');
//         }
//     });

//     } else if (req.body.logemail && req.body.logpassword) {
//         User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
//         if (error || !user) {
//             var err = new Error('Wrong email or password.');
//             err.status = 401;
//             return next(err);
//         } else {
//             req.session.userId = user._id;
//             return res.redirect('/profile');
//         }
//         });
//     } else {
//         var err = new Error('All fields required.');
//         err.status = 400;
//         return next(err);
//     }
// })

// // GET route after registering
// router.get('/profile', function (req, res, next) {
//   User.findById(req.session.userId)
//     .exec(function (error, user) {
//         if (error) {
//             return next(error);
//         } else {
//             if (user === null) {
//             var err = new Error('Not authorized! Go back!');
//             err.status = 400;
//             return next(err);
//             } else {
//             return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
//             }
//         }
//     });
// });

// // GET for logout logout
// router.get('/logout', function (req, res, next) {
//     if (req.session) {
//         // delete session object
//         req.session.destroy(function (err) {
//         if (err) {
//             return next(err);
//         } else {
//             return res.redirect('/');
//         }
//         });
//     }
// });

module.exports = router;