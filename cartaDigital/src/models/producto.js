import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductoSchema = new Schema(
    {
        nombre: { type: String, required: true, trim: true },
        descripcion: { type: String, trim: true },
        precio: { type: Number, required: true, min: 0 },
    },
    { timestamps: true }
);

export default mongoose.model('Producto', ProductoSchema);
