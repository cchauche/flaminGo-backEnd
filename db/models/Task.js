const mongoose = require('mongoose');
const { Schema } = mongoose;
const db = require('../../db');

const taskSchema = new Schema({
  room_id: {type: Schema.Types.ObjectId, ref: 'Room'},
  roomNumber: String,
  location: String,
  department: {type: String, required: true},
  taskTitle: {type: String, required: true},
  taskDescription: {type: String, required: true},
  employeeCreated: {type: Schema.Types.ObjectId, ref: 'Employee'},
  employeeCompleted: {type: Schema.Types.ObjectId, ref: 'Employee'},
  dueBy: {type: String, required: true},
  isCompleted: {type: Boolean, default: false},
  completedAt: {type: String, default: null}
},
{
  timestamps: true,
  versionKey: false
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;