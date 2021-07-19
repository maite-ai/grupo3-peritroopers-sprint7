const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const uploadFile = require('../middlewares/multerMiddlewareProduct');
const validations = require('../middlewares/productValidationsMiddleware');
const authMiddleware=require('../middlewares/authMiddleware');

router.get("/productCart", authMiddleware, productController.productCart);
router.get('/', productController.list);
router.get('/search', productController.search);
router.get('/create', authMiddleware, productController.create);
router.post('/create', uploadFile.single('image'), validations, productController.store);
router.get('/:id', productController.detail);
router.get('/:id/edit', authMiddleware, productController.edit);
router.put('/:id', uploadFile.single('image'), validations, productController.update);
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);

module.exports = router;