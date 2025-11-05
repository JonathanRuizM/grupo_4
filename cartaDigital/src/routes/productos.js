import express from 'express';
import * as productoCtrl from '../controllers/productoController.js';

const router = express.Router();

router.get('/', productoCtrl.listProductos);
router.post('/', productoCtrl.createProducto);
router.get('/:id', productoCtrl.getProducto);
router.put('/:id', productoCtrl.updateProducto);
router.delete('/:id', productoCtrl.deleteProducto);

export default router;