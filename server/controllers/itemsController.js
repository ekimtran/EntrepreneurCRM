const Item = require('../models').Item;

const createItem = (req, res) => {
    Item
        .create({
            description: req.body.description,
            price: req.body.price
        })
        .then(product => res.status(201).send(product))
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        })
}

module.exports = {
    createItem,
};