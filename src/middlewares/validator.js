const {validateCreateVendorSchema} = require('./validate.schemas');
exports.validateCreateVendor = (req,res,next)=>{

        const validated =  validateCreateVendorSchema.validate(req.body);
        if(validated.error)
        return res.status(400).json({success: false,message: 'invalid request'});
        
        next()
    
}