const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    status: {
        isBacklog: Boolean,
        isActive: Boolean,
        isAssigned: Boolean,
        isDone: Boolean,
        isArchived: Boolean
    },
    type: String,
    color: String,
    assignee: String,
    priority: Number,
    isArchived: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;