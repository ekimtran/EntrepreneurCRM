const Item = require('../models').Item;
const Vendor = require('../models').Vendor;
const validateItemInput = require('../validation/item');

const createItem = (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Item.findOne({
      where: { name: req.body.name },
    })
      .then((item) => {
        if (item) {
          return res.status(400).json({ item: "Item already exists" });
        } else {
          Item.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            vendorId: req.body.vendorId,
          })
            .then(() => res.status(201).json({ item: "Item added to list!" }))
            .catch((error) => res.status(400).json(error));
        }
      })
      .catch((err) => res.status(400).json(err));
};

const getItemInfo = (req, res) => {

    Item.findOne({
        where: { id: req.body.id},
        include: [{
            model: Vendor,
            as: 'vendor',
            attributes: ['company']
        }]
    })
    .then(item => res.status(201).json(item))
}

module.exports = {
    createItem,
    getItemInfo
}
