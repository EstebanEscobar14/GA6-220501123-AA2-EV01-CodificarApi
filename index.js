import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import adopcionRoutes from './routes/adopcion.js';

// Creamos el servidor
const app = express();

// Conectamos a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Definir la ruta base correctamente
app.use('/api/adopcion', adopcionRoutes);
app.use('/api/auth', authRoutes);

// Levantamos el servidor
app.listen(4000, () => {
    console.log('Servidor levantado');
});
