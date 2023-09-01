// require dependencies ...
const express = require('express');
const {homeRoute} = require('../controllers/homeController');
const router = express();

//endpoints...
router.get('/',homeRoute);

module.exports = router;