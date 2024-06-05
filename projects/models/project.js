// models/project.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  tasks: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Project', ProjectSchema);
