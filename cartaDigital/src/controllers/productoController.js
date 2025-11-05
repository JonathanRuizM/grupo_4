import Producto from '../models/producto.js';

export const createProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    const saved = await producto.save();
    return res.status(201).json(saved);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const listProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    return res.json(productos);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    return res.json(producto);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const updated = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const deleted = await Producto.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
    return res.json({ message: 'Producto eliminado' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};