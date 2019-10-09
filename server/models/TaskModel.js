const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    status: String,
    type: String,
    color: String,
    assignee: String,
    priority: Number,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;