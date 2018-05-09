// roster and roster controler?
const auth = require('./routes/auth');
app.use('/api/auth', auth);

// save router where? replace blah
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        blah.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
      });
    } else {
        return res.status(403).send({success: false, message: 'unauthorized'});
    }
});

// get router where? replace blah
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        blah.find(function (err, blah) {
            if (err) return next(err);
            res.json(blah);
        });
    } else {
      return res.status(403).send({success: false, message: 'unauthorized'});
    }
});

// get and extract JWT
getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
  
  module.exports = router;

// AdminLogin.js correct?
axios.post('/api/auth/login')

// AdminLogin.js what should className be css?
{message !== '' &&
<div className=""></div>
}

// AdminLogin.js need?
className="form-control"

// AdminLogin.js correct?
axios.post('/api/auth/register')

// AdminRegister.js
// all routes
