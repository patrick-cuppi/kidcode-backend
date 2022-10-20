import express from 'express';
import connectDb from './config/database.js';
import cors from 'cors';
import dotenv from 'dotenv-safe';

import userRoutes from './routes/userRoutes.js';

//const express = require('express');
const app = express();
//const cors = require('cors');

//const db = require('./config/database');
//const userRoutes = require('./routes/userRoutes');

dotenv.config();
//require('dotenv-safe').config();

//conectando ao banco de dados
connectDb();

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

export default app;
