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

const updateItem = (req, res) => {
  Item.findOne({
    where: { id: req.body.id}
  })
  .then(item => {
    item
      .update({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      })
      .then(() => 
        res.status(201).json({ item: 'Item information has been updated'})
      )
      .catch(error => res.status(400).json(error))
  })
  .catch(err => res.status(400).json(err))
}

const deleteItem = (req, res) => {
  Item.findOne({
    where: { id: req.body.id}
  })
  .then(item => {
    item
      .destroy()
      .then(() => res.status(201).json({ item: "Item deleted!" }))
      .catch((error) => res.staus(400).json(error));
  })
  .catch(err => res.status(400).json(err))
}

const listOfVendorItem = (req, res) => {
  Item.findAll({
    where: { vendorId: req.body.vendorId}
  })
  .then(item => {
    if(item.length >= 1) {
      return res.status(201).json(item)
    } 
    else {
      return res.status(400).json({ item: 'No item from this Vendor'})
    }
  })
  .catch(error => res.status(400).json(error))
}
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
    getItemInfo,
    updateItem,
    deleteItem,
    listOfVendorItem
}
