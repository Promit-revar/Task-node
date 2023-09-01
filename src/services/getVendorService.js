const db = require('../models');

exports.getVendorsService = async() => {
    const vendorList = await db.Vendor.findAll();
    return vendorList;
}
exports.getSingleVendorService = async(id) => {
    const vendor = await db.Vendor.findOne({
        where:{
            id,
        }
    });
    if(!vendor) throw new Error('Invalid Id');

    return vendor;
}