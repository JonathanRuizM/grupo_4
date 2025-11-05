import express from 'express';
import { listMesas, createMesa, getMesa, updateMesa, deleteMesa } from '../controllers/mesaController.js';

const router = express.Router();

router.get('/', listMesas);
router.post('/', createMesa);
router.get('/:id', getMesa);
router.put('/:id', updateMesa);
router.delete('/:id', deleteMesa);

export default router;