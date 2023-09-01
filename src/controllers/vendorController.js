const {createVendorService} = require('../services/createVendorService');
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