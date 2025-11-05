import Mesa from '../models/mesa.js';

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
    const mesas = await Mesa.find();
    return res.json(mesas);
  } catch (err) {
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