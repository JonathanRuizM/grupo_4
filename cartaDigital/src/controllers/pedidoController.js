import Pedido from '../models/pedido.js';
import { ESTADOS_PEDIDO } from '../constants.js';

export const createPedido = async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    const saved = await pedido.save();
    return res.status(201).json(saved);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const listPedidos = async (req, res) => {
  try {
    const estado = req.body?.estado;

     if (estado && !Object.values(ESTADOS_PEDIDO).includes(estado)) {
      return res.status(400).json({ error: 'estado de pedido inválido' });
    }
      const filtro = estado ? { estado } : {};

    const pedidos = await Pedido.find(filtro);
    return res.json(pedidos);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
    return res.json(pedido);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const updatePedido = async (req, res) => {
  try {
    const updated = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: 'Pedido no encontrado' });
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const deletePedido = async (req, res) => {
  try {
    const deleted = await Pedido.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Pedido no encontrado' });
    return res.json({ message: 'Pedido eliminado' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};