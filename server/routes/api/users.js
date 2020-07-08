const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const keys = require('../../config/keys');

require('../../config/passport')(passport);
const User = require('../../models/user');

router.post('/signup', (req, res) => {

    console.log(req.body);

    const { email, password, first_name, last_name } = req.body;

    if (!email || !password || !first_name || !last_name) {
        res.status(400).send({msg: 'Please pass in the information.'})
    } else {
        User
            .create({
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name
            })
            .then(user => res.status(201).send(user))
            .catch(err => {
                console.log(error);
                res.status(400).send(error);
            });
    }
    
});

router.post('/signin', (req, res) => {
    User
        .find({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).send({
                    msg: 'Authentication failed. User not found.'
                });
            }

            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    let token = jwt.sign(
                                JSON.parse(JSON.stringify(user)), 
                                keys.secretOrKey, 
                                {expiresIn: 86400 * 30});
                    
                    jwt.verify(token, keys.secretOrKey, (err, data) => {
                        console.log(err, data);
                    })
                    res.json({sucess: true, token: 'JWT ' + token});
                } else {
                    res.status(401).send({
                                        sucess: false, 
                                        msg: 'Authentication failed. Wrong password.'});

                }
            })
        })
        .catch(err => res.status(400).send(err));
})



