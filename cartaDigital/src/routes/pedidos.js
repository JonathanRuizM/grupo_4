import express from 'express';
import * as pedidoCtrl from '../controllers/pedidoController.js';
import { listPedidos, createPedido, getPedido, updatePedido, deletePedido } from '../controllers/pedidoController.js';  

const router = express.Router();

router.get('/', listPedidos);
router.post('/', createPedido);
router.get('/:id',getPedido);
router.put('/:id', updatePedido);
router.delete('/:id', deletePedido);


export default router;