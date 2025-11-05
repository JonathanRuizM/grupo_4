import express from 'express';
import * as mesaCtrl from '../controllers/mesaController.js';

const router = express.Router();

router.get('/', mesaCtrl.listMesas);
router.post('/', mesaCtrl.createMesa);
router.get('/:id', mesaCtrl.getMesa);
router.put('/:id', mesaCtrl.updateMesa);
router.delete('/:id', mesaCtrl.deleteMesa);

export default router;