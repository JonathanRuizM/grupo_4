import mongoose from 'mongoose';

const { Schema } = mongoose;

const MesaSchema = new Schema(
    {
        numero: { type: Number, required: true, unique: true },
        capacidad: { type: Number, required: true, min: 1 },
        estado: { type: String, enum: ['disponible', 'ocupada', 'reservada'], default: 'disponible' },

    },
    { timestamps: true }
);

export default mongoose.model('Mesa', MesaSchema);
