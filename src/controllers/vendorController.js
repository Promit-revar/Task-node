const {createVendorService} = require('../services/createVendorService');
const { getVendorsService, getSingleVendorService} = require('../services/getVendorService');
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
