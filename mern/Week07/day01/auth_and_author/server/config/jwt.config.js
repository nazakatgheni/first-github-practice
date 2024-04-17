const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports = {
    authenticate: (req, res, next) => {
        jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
            if (err) {
                res.status(401).json({ verified: false, message: "You must have access" })
            } else {
                next()
            }
        })
    }
}