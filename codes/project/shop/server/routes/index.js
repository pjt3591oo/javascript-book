const express = require('express');
let router = express.Router();

const admin = require('./admin');
const clothes = require('./clothes');
const purchase = require('./purchase');
const users = require('./users');

router.use('/admin', admin)
router.use('/clothes', clothes)
router.use('/purchase', purchase)
router.use('/users', users)

module.exports = router;
