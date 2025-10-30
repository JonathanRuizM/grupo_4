import express from 'express';
import { getEmpleados, getEmpleadosSearch, getEmpleadoByEmail, createEmpleado, updateEmpleado, deleteEmpleado} from '../controllers/empleadoController.js';

const router = express.Router();

router.get('/', getEmpleados);
router.get('/search', getEmpleadosSearch);
router.get('/:email', getEmpleadoByEmail);
router.post('/', createEmpleado);
router.put('/:email', updateEmpleado);
router.delete('/:email', deleteEmpleado);

export default router;