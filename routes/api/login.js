const express = require('express');
const appConfig = require('../../config.js');
const createDOMPurify = require('dompurify');
const crypto = require('crypto');
const { JSDOM } = require('jsdom');
const mailgun = require('mailgun-js')({
  apiKey: appConfig.mailgun.apiKey,
  domain: appConfig.mailgun.domain,
});
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../../models/admin.js');

const router = express.Router();

// mongoose promise
mongoose.Promise = global.Promise;

// GET route for reading data
router.get('/', function (req, res, next) {
    return res.sendFile(path.join(__dirname + '../../client/src/pages/07_Admin_Login'));
});

// GET to /checksession
router.get('/checksession', (req, res) => {
    if (req.user) {
        return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({}));
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

// POST save password
router.post('/savepassword', async (req, res) => {
    let result;
    try {
        // look up user in the DB based on reset hash
        const query = User.findOne({ passwordReset: req.body.hash });
        const foundUser = await query.exec();
  
        // If the user exists save their new password
        if (foundUser) {
            // user passport's built-in password set method
            foundUser.setPassword(req.body.password, (err) => {
                if (err) {
                    result = res.send(JSON.stringify({ error: 'Password could not be saved. Please try again' }));
                } else {
                    // once the password's set, save the user object
                    foundUser.save((error) => {
                        if (error) {
                            result = res.send(JSON.stringify({ error: 'Password could not be saved. Please try again' }));
                        } else {
                        // Send a success message
                        result = res.send(JSON.stringify({ success: true }));
                        }
                    });
                }
            });
        } else {
            result = res.send(JSON.stringify({ error: 'Reset hash not found in database.' }));
        }
    } catch (err) {
        result = res.send(JSON.stringify({ error: 'There was an error connecting to the database.' }));
    }
    return result;
  });

// POST to saveresethash
router.post('/saveresethash', async (req, res) => {
    let result;
    try {
        // check and make sure the email exists
        const query = User.findOne({ email: req.body.email });
        const foundUser = await query.exec();
    
        // If the user exists, save their password hash
        const timeInMs = Date.now();
        const hashString = `${req.body.email}${timeInMs}`;
        const secret = appConfig.crypto.secret;
        const hash = crypto.createHmac('sha256', secret)
                            .update(hashString)
                            .digest('hex');
        foundUser.passwordReset = hash;
    
        foundUser.save((err) => {
            if (err) { result = res.send(JSON.stringify({ error: 'Something went wrong while attempting to reset your password. Please Try again' })); }
    
            // Put together the email
            const emailData = {
                from: `CloseBrace <postmaster@${appConfig.mailgun.domain}>`,
                to: foundUser.email,
                subject: 'Reset Your Password',
                text: `A password reset has been requested. If you made this request, please click the following link: https://${foundUser.passwordReset} ... if you didn't make this request, feel free to ignore it!`,
                html: `<p>A password reset has been requested. If you made this request, please click the following link: <a href="https://${foundUser.passwordReset}&quot; target="_blank">https://${foundUser.passwordReset}</a>.</p><p>If you didn't make this request, feel free to ignore it!</p>`,
            };
    
            // Send it
            mailgun.messages().send(emailData, (error, body) => {
                if (error || !body) {
                    result = res.send(JSON.stringify({ error: 'Something went wrong while attempting to send the email. Please try again.' }));
                } else {
                    result = res.send(JSON.stringify({ success: true }));
                }
            });
        });
    } catch (err) {
        // if the user doesn't exist, error out
        result = res.send(JSON.stringify({ error: 'Something went wrong while attempting to reset your password. Please Try again' }));
    }
    return result;
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