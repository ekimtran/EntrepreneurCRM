const Inventory = require('../models').Inventory;
const validateInventoryItem = require('../validation/inventory');

const createInventory = (req, res) => {
    const { errors, isValid } = validateInventoryItem(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Inventory.findOne({
        where: { itemId: req.body.itemId },
    })
        .then(item => {
            if (item) {
                return res.status(400).json({ inventory: 'Inventory already exists'})
            } else {
                Inventory.create({
                    userId: req.body.userId,
                    itemId: req.body.itemId,
                    quanity: req.body.quanity
                })
                    .then(() => res.status(201).json({ inventory: 'Inventory added!'}))
                    .catch(error => res.status(400).json(error));
            }
        })
        .catch(err => res.status(400).json(err))
};


module.exports = {
    createInventory,
}