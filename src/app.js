import express from 'express';
import connectDb from './config/database.js';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

//const express = require('express');
const app = express();
//const cors = require('cors');

//const db = require('./config/database');
//const userRoutes = require('./routes/userRoutes');

//dotenv.config() já estava em uso no database.js
//dotenv.config();
//require('dotenv-safe').config();

//conectando ao banco de dados
connectDb();

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/courses', courseRoutes);
app.use('/admin', adminRoutes);

export default app;
