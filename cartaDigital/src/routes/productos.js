import express from 'express';
import { listProductos, createProducto, getProducto, updateProducto, deleteProducto } from '../controllers/productoController.js';

const router = express.Router();

router.get('/', listProductos);
router.post('/', createProducto);
router.get('/:id', getProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

export default router;