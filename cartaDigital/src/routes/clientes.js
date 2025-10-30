import express from 'express';
import { getClientes, getClientesSearch, getClienteByDni, createCliente, updateCliente, deleteCliente} from '../controllers/cliente.js';

const router = express.Router();


router.get('/', getClientes);
router.get('/search', getClientesSearch);
router.get('/:dni', getClienteByDni);
router.post('/', createCliente);
router.put('/:dni', updateCliente);
router.delete('/:dni', deleteCliente);

export default router;
