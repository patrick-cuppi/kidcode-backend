import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';

// const mongoose = require('mongoose');
// const dotenv = require('dotenv-safe');

dotenv.config();
/* "mongodb://localhost:27017/" (nem com /users nem com /databaseName) nem o Atlas funcionou mais como localhost,
porém o process.env. que ela utilizaou abaixo tbm não funciona,
então ou ele funciona e o banco de dados fica desprotegido ou não funciona*/

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Banco conectado com sucesso!');
  } catch (error) {
    console.error('Erro: ', error.message);
  }
};

export default connect;
