import mongoose from 'mongoose';

const PedidoSchema = mongoose.Schema(
    {
        cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
        mesa: { type: mongoose.Schema.Types.ObjectId, ref: 'Mesa', required: true },
        items: [{
            producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
            cantidad: { type: Number, required: true, min: 1 },
            precio: { type: Number, required: true, min: 0 }
        }],
        total: { type: Number, required: true, min: 0 },
        estado: { type: String, enum: ['pendiente', 'en_preparacion', 'listo', 'entregado', 'cancelado'], default: 'pendiente' },
        observaciones: { type: String, trim: true }
    },
    { timestamps: true }
);

export default mongoose.model('Pedido', PedidoSchema);
