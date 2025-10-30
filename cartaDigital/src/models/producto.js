import mongoose from 'mongoose';

const ProductoSchema = mongoose.Schema(
    {
        nombre: { type: String, required: true, trim: true },
        descripcion: { type: String, trim: true },
        precio: { type: Number, required: true, min: 0 },
    },
    { timestamps: true }
);

export default mongoose.model('Producto', ProductoSchema);
