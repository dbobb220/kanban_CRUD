let Task = require('./TaskModel.js');


// get all tasks - list
exports.list = list = (req, res) => {
    Task.find((err, tasks) => {
        err ? res.send(`Error: ${err}`) : res.json(tasks);
    })
}
// post a task - create
exports.create = create = (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
        type: req.body.type,
        color: req.body.color,
        assignee: req.body.assignee,
        priority: req.body.priority,
    })
    newTask.save((err, task) => {
        err ? res.send(`Error: ${err}`) : res.json(task);
    })
}

exports.move = move = (req, res) => {
    let findTask = req.params.taskId;
    let updateTask = req.body;
    Task.findByIdAndUpdate(findTask, updateTask, (err, result) => {
       err ? res.send(`Error: ${err}`) : res.send('Task Moved');
    })
}
