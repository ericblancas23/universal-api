const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    //create user
    create: function(req, res, next) {
        userModel.create({ name: req.body.name, email: req.body.email, 
                         password: req.body.password }, function(err, result) {
                          if(err) {
                              next(err);
                          } else {
                            res.json({status: 'sucess', message: 'User added successfully', data: null });
                          }
                        });
    },
    //authenticate user
    authenticate: function(req, res, next) {
        userModel.findOne({ email: req.body.email}, function(err, userInfo) {
            if(err) {
                next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, userInfo)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secret key'), 
                    {expiresIn: '1 hr'});
                    res.json({ status: 'success', message: 'user found', data: {user: userInfo, token: token}});
                } else {
                    res.json({status: 'error', message: 'invalid email/password', data: null});
                }
            }
        });
    },
}