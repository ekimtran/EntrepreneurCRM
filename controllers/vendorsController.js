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
            return res.status(400).json({ vendor: 'Vendor already existed'})
        } else {
            Vendor.create({
                company: req.body.company,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode,
                userId: req.body.userId
            })
            .then(() => res.status(201).json({ vendor: 'Vendor added!'}))
            .catch(error => res.status(400).json(error))
        }
    })
    .catch(err => res.status(400).json(err))
};

const updateVendor = (req, res) => {
    Vendor.findOne({
        where: { id: req.body.id},
    })
    .then(vendor => {
        vendor
          .update({
            company: req.body.company,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
          })
          .then(() =>
            res.status(201).json({ vendor: "Vendor information updated!" })
          )
          .catch((error) => res.status(400).json(error));
    })
    .catch(err => res.status(400).json(err))
};

const listOfVendors = (req, res) => {
    Vendor.findAll({
        where: { userId: req.body.userId},
        order: [['company', 'ASC']]
    })
    .then(vendor => res.status(201).json(vendor))
    .catch(() => res.status(400).json({ vendor: 'No vendor'}))
};

const deleteVendors = (req, res) => {
    Vendor.findOne({
        where: { id: req.body.id},
    })
    .then(vendor => {
        vendor.destroy()
        .then(() => res.status(201).json({ vendor: 'Vendor deleted!'}))
        .catch(error => res.status(400).json(error));
    })
    .catch(err => res.status(400).json(err))
}



module.exports = {
    createVendor,
    updateVendor,
    listOfVendors,
    deleteVendors
}