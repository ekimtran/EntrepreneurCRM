const Vendor = require("../models").Vendor;
const validateVendorInput = require('../validation/vendor');

const createVendor = (req, res) => {
    const { errors, isValid } = validateVendorInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    Vendor.find({
        where: {
            phoneNumber: req.body.phoneNumber
        },
    })
    .then(vendor => {
        if (vendor) {
            return res.status(400).json({vendor: 'Vendor already existed'})
        } else {
            Vendor.create({
                company: req.body.company,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode
            })
            .then(() => res.status(201).json({ vendor: 'Vendor added!'}))
            // .catch(error => res.status(400).json(error))
        }
    })
    // .catch(err => res.status(400).json(err))
};


module.exports = {
    createVendor,
}