import mongoose from 'mongoose';

const { Schema } = mongoose;

const ClienteSchema = new Schema(
    {
        nombre: { type: String, required: true, trim: true },
        edad: { type: Number, min: 0 },
        email: { type: String, required: true, lowercase: true, trim: true, unique: true },
        dni: { type: String, required: true, unique: true, trim: true },
        genero: { type: String, enum: ['masculino', 'femenino', 'otro', 'prefiere_no_decir'] },
        pedidos: [{ type: Schema.Types.ObjectId, ref: 'Pedido' }]
    },
    { timestamps: true }
);

export default mongoose.model('Cliente', ClienteSchema);