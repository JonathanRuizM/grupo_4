import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import conectionDB from "./src/config/db.js"
import clientesRoutes from "./src/routes/clientes.js";
import empleadosRoutes from "./src/routes/empleados.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


conectionDB();

app.use(express.json());

app.get('/', (req, res) => {
res.send('bienvenido a la carta digital');
});

app.use('/api/clientes', clientesRoutes);
app.use('/api/empleados', empleadosRoutes);

app.listen(PORT, () => {
console.log(`servidor corriendo en el puerto ${PORT}`);
});





