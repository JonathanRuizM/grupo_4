import express from 'express';
import { listProductos, createProducto, getProducto, updateProducto, deleteProducto } from '../controllers/productoController.js';
import { protegerRuta } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.get('/', listProductos);
router.post('/', protegerRuta, createProducto);
router.get('/:id', getProducto);
router.put('/:id', protegerRuta, updateProducto);
router.delete('/:id', protegerRuta, deleteProducto);

export default router;