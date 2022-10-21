import mongoose from 'mongoose';

//const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  subjects: {
    languages: { type: Array }
  },
  description: {
    duration: { type: String },
    smallDescription: { type: String },
    completeDescription: { type: String }
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const CourseSchema = mongoose.model('Course', courseSchema);

export default CourseSchema;
