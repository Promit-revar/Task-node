const db = require('../models');

exports.createVendorService = async(data) => {
    const isVendorPresent = await db.Vendor.findOne({
        where:{
            contact_person_email: data.contact_person_email,
        }
    })
    if(isVendorPresent){
        throw new Error('Vendor Already Exists');
    }
   
    const vendor = await db.Vendor.create({...data})
    
    return vendor;
}