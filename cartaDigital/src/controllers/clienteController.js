import Cliente from '../models/cliente.js';

export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener clientes", errorMsg: error });
    }
};

export const getClientesSearch = async (req, res) => {
    const { nombre } = req.query;

    try {
        const clientes = await Cliente.find({
            nombre: { 
                $regex: `^${nombre}`,
                $options: 'i'
            }
        });
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar clientes", errorMsg: error });
    }
};

export const getClienteByDni = async (req, res) => {
    const { dni } = req.params;

    try {
        const cliente = await Cliente.findOne({ dni: dni });
        if (!cliente) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener cliente", errorMsg: error });
    }
};

export const createCliente = async (req, res) => {
    if (!req.body.nombre || !req.body.email || !req.body.dni) {
        return res.status(400).json({
            error: "Faltan datos requeridos (nombre, email, dni)"
        });
    }

    const nuevoCliente = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        email: req.body.email,
        dni: req.body.dni,
        genero: req.body.genero,
        pedidos: req.body.pedidos || []
    };

    try {
        const newCliente = await Cliente.create(nuevoCliente);
        res.status(201).json(newCliente);
    } catch (error) {
        res.status(500).json({ error: "Error al crear cliente", errorMsg: error });
    }
};

export const updateCliente = async (req, res) => {
    const { dni } = req.params;

    try {
        const cliente = await Cliente.findOneAndUpdate(
            { dni: dni },
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!cliente) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar cliente", errorMsg: error });
    }
};

export const deleteCliente = async (req, res) => {
    const { dni } = req.params;

    try {
        const cliente = await Cliente.findOneAndDelete({ dni: dni });
        
        if (!cliente) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        
        res.json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar cliente", errorMsg: error });
    }
};
