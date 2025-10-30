import mongoose from 'mongoose';

const { Schema } = mongoose;

const EmpleadoSchema = new Schema(
    {
        nombre: { type: String, required: true, trim: true },
        edad: { type: Number, min: 0 },
        fechaIngreso: { type: Date, required: true },
        celular: { type: String, required: true, trim: true },
        email: { type: String, required: true, lowercase: true, trim: true, unique: true }
    },
    { timestamps: true }
);

export default mongoose.model('Empleado', EmpleadoSchema);


