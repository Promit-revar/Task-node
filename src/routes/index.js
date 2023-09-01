// require dependencies ...
const express = require('express');
const {homeRoute} = require('../controllers/homeController');
const {createVendor } = require('../controllers/vendorController');
const {validateCreateVendor } = require('../middlewares/validator');
const router = express();
router.use(express.json());
//Home Route
router.get('/',homeRoute);

//Vendor Routes
router.post('/create-vendor',validateCreateVendor,createVendor);

module.exports = router;