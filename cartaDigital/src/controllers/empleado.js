import Empleado from '../models/empleado.js';

export const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener empleados", errorMsg: error });
    }
};

export const getEmpleadosSearch = async (req, res) => {
    const { nombre } = req.query;

    try {
        const empleados = await Empleado.find({
            nombre: { 
                $regex: `^${nombre}`,
                $options: 'i'
            }
        });
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar empleados", errorMsg: error });
    }
};

export const getEmpleadoByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const empleado = await Empleado.findOne({ email: email });
        if (!empleado) {
            return res.status(404).json({ error: "Empleado no encontrado" });
        }
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener empleado", errorMsg: error });
    }
};

export const createEmpleado = async (req, res) => {
    if (!req.body.nombre || !req.body.email || !req.body.celular || !req.body.fechaIngreso) {
        return res.status(400).json({
            error: "Faltan datos requeridos (nombre, email, celular, fechaIngreso)"
        });
    }

    const nuevoEmpleado = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        fechaIngreso: req.body.fechaIngreso,
        celular: req.body.celular,
        email: req.body.email
    };

    try {
        const newEmpleado = await Empleado.create(nuevoEmpleado);
        res.status(201).json(newEmpleado);
    } catch (error) {
        res.status(500).json({ error: "Error al crear empleado", errorMsg: error });
    }
};

export const updateEmpleado = async (req, res) => {
    const { email } = req.params;

    try {
        const empleado = await Empleado.findOneAndUpdate(
            { email: email },
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!empleado) {
            return res.status(404).json({ error: "Empleado no encontrado" });
        }
        
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar empleado", errorMsg: error });
    }
};

export const deleteEmpleado = async (req, res) => {
    const { email } = req.params;

    try {
        const empleado = await Empleado.findOneAndDelete({ email: email });
        
        if (!empleado) {
            return res.status(404).json({ error: "Empleado no encontrado" });
        }
        
        res.json({ message: "Empleado eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar empleado", errorMsg: error });
    }
};
