const express = require('../node_modules/express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.post('/create', itemsController.createItem);
router.get('/vendor', itemsController.getItemInfo);
router.patch('/update', itemsController.updateItem);
router.delete('/delete', itemsController.deleteItem);
router.get('/vendoritems', itemsController.listOfVendorItem);







module.exports = router;