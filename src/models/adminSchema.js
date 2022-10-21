import mongoose from 'mongoose';

//const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const AdminSchema = mongoose.model('Admin', adminSchema);

export default AdminSchema;
