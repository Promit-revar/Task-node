const db = require('../models');

exports.updateVendorService = async(id,data) => {
    const isVendorPresent = await db.Vendor.findOne({
        where:{
            id
        }
    })
    if(!isVendorPresent){
        throw new Error("Vendor Doesn't Exists");
    }
   
    const vendor = await db.Vendor.update({
        ...data
    },{where:{id}});
    
    return vendor;
}