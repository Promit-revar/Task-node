const db = require('../models');

exports.deleteVendorService = async(id) => {
    const isVendorPresent = await db.Vendor.findOne({
        where:{
            id
        }
    })
    if(!isVendorPresent){
        throw new Error("Vendor Doesn't Exists");
    }
   
    const vendor = await db.Vendor.destroy({where:{id}});
    
    return "Deleted SucessFully";
}