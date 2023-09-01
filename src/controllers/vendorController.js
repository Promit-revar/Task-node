const {createVendorService} = require('../services/createVendorService');
const { getVendorsService, getSingleVendorService} = require('../services/getVendorService');
const {updateVendorService} = require('../services/updateVendorService');
const {deleteVendorService} = require('../services/deleteVendorService');
exports.createVendor = async(req,res)=>{
    try{
        const vendor = await createVendorService(req.body)
        res.status(201).json({
            success: true,
            data: vendor
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getVendors = async(req,res) => {
    try{
        const vendors = await getVendorsService();
        res.status(200).json({
            success: true,
            data: vendors
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
exports.getSingleVendor = async(req,res) => {
    try{
        const vendor = await getSingleVendorService(req.params.id);
        res.status(200).json({
            success: true,
            data: vendor
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.updateVendor= async(req,res) => {
    try{
        const vendor = await updateVendorService(req.params.id, req.body);
        res.status(200).json({
            success: true,
            data: vendor
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteVendor= async(req,res) => {
    try{
        const result = await deleteVendorService(req.params.id);
        res.status(200).json({
            success: true,
            data: result
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}