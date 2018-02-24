const express = require('express');
let router = express.Router();

const {users} = require('../models')
const passport = require('passport');

router.post('/signup',(req, res, next)=>{
    let {uid, password, price} = req.body
    users.findOrCreate({
        where: {uid: uid},
        defaults: {
            uid: uid,
            password: password,
            price: price
        }
    }).spread((user, created) => {
        if(created){
            res.status(201).json({})
        }else{
            res.status(200).json({})
        }
    })
})

router.post('/signin',
    passport.authenticate('local',{
        successRedirect: '/api/v1.0/users/signin/success',
        failureRedirect: '/api/v1.0/users/signin/fail'}
        )
);

router.get('/signin/success', (req, res) => {
    res.status(200).json({})
})

router.get('/signin/fail', (req, res) => {
    res.status(204).json({})
})

router.get('/session-check', (req, res) => {
    res.status(200).json(req.user)
})

router.put('/signout', (req, res) => {
    req.logout()
    res.status(201).json({})
})

module.exports = router;
