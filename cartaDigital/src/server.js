import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import conectionDB from "./config/db.js"
import clientesRoutes from "./routes/clientes.js";
import empleadosRoutes from "./routes/empleados.js";
import mesasRoutes from "./routes/mesas.js";
import productosRoutes from "./routes/productos.js";
import pedidosRoutes from "./routes/pedidos.js";


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
app.use('/api/mesas',mesasRoutes);
app.use('/api/productos',productosRoutes)
app.use('/api/pedidos',pedidosRoutes)

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});





