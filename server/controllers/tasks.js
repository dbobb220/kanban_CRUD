let Task = require('../models/tasks.js');

// get all tasks - list
exports.list = list = (req, res) => {
    Task.find((err, tasks) => {
        err ? res.send(`Error: ${err}`) : res.json(tasks)
    })
}
// post a task - create
exports.create = create = (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        status: {
            isBacklog: req.body.status.isBacklog,
            isActive: req.body.status.isActive,
            isAssigned: req.body.status.isAssigned,
            isDone: req.body.status.isDone,
        },
        type: req.body.type,
        color: req.body.color,
        assignee: req.body.assignee,
        priority: req.body.priority,
        isArchived: req.body.status.isArchived
    })
    newTask.save((err, task) => {
        err ? res.send(`Error: ${err}`) : res.json(task);
    })
}
