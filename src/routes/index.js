// require dependencies ...
const express = require('express');
const {homeRoute} = require('../controllers/homeController');
const {createVendor, getVendors, getSingleVendor, updateVendor, deleteVendor } = require('../controllers/vendorController');
const {validateCreateVendor } = require('../middlewares/validator');
const router = express();
router.use(express.json());
//Home Route
router.get('/',homeRoute);

//Vendor Routes
router.post('/create-vendor',validateCreateVendor,createVendor);
router.get('/vendors',getVendors);
router.get('/vendor/:id',getSingleVendor);
router.put('/update-vendor/:id',updateVendor);
router.delete('/delete-vendor/:id',deleteVendor);

module.exports = router;