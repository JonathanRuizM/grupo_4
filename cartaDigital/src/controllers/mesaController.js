import Mesa from '../models/mesa.js';
import { ESTADOS_MESA } from '../constants.js';

export const createMesa = async (req, res) => {
  try {
    const mesa = new Mesa(req.body);
    const saved = await mesa.save();
    return res.status(201).json(saved);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const listMesas = async (req, res) => {
  try {
    const estado = req.body?.estado;

    if (estado && !Object.values(ESTADOS_MESA).includes(estado)) {
      return res.status(400).json({ error: 'estado inválido' });
    }
    const filtro = estado ? { estado } : {};

    const mesas = await Mesa.find(filtro);

    if (mesas.length === 0) {
      return res.status(404).json({ error: 'No hay mesas disponibles' });
    }

    return res.json(mesas);
  } catch (err) {
    console.error("Error al listar mesas:", err);
    return res.status(500).json({ error: err.message });
  }
};

export const getMesa = async (req, res) => {
  try {
    const mesa = await Mesa.findById(req.params.id);
    if (!mesa) return res.status(404).json({ error: 'Mesa no encontrada' });
    return res.json(mesa);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const updateMesa = async (req, res) => {
  try {
    const updated = await Mesa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: 'Mesa no encontrada' });
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const deleteMesa = async (req, res) => {
  try {
    const deleted = await Mesa.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Mesa no encontrada' });
    return res.json({ message: 'Mesa eliminada' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};