const User = require('../models/user').User;
const Todos = require('../models/todo').Todo;
const jwt = require('jsonwebtoken');

module.exports = {
    authenticateToken: (req, res, next) => {
        const auth = req.headers.authorization;

        if (auth) {
            const token = auth.split('')[1];

            jwt.sign(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).send({
                        message: 'Invalid Token Provided'
                    });
                }

                req.user = user;
                next();
            });
        } else {
            res.status(403).send({
                message: 'Unauthorized Access'
            })
        }
    },
}