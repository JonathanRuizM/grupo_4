import express from 'express';
import * as pedidoCtrl from '../controllers/pedidoController.js';

const router = express.Router();

router.get('/', pedidoCtrl.listPedidos);
router.post('/', pedidoCtrl.createPedido);
router.get('/:id', pedidoCtrl.getPedido);
router.put('/:id', pedidoCtrl.updatePedido);
router.delete('/:id', pedidoCtrl.deletePedido);

export default router;