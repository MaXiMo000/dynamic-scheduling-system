import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
const app = express();
import availabilityRoutes from './routes/availabilityRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';
import authRoutes from './routes/authRoutes.js';
import authMiddleware from './utils/authMiddleware.js';

app.use(cors());
app.use(json());
app.use('/api/availability', authMiddleware, availabilityRoutes);
app.use('/api/sessions', authMiddleware, sessionRoutes);
app.use('/api', authRoutes);

connect('mongodb://localhost:27017/availability-scheduler', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(5000, () => console.log('Server running on port 5000'));