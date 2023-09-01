const Joi = require('joi');

exports.validateCreateVendorSchema = Joi.object({
    organisation_name: Joi.string().required(),
    profile_picture: Joi.string().optional(),
    contact_person_name: Joi.string().required(),
    contact_person_email: Joi.string().email({ tlds: { allow: false } }).required(),
    phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    address: Joi.string().min(5).max(50).optional()
})