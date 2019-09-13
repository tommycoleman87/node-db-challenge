const db = require('../data/db-config');

module.exports = {
getTasks,
addTask
}



function getTasks() {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.project_name', 'p.description as project_description', 't.*')
    .then(tasks => {
        const convertedTasks = tasks.map(task => {
            if(task.completed === 1) {
                task.completed = true;
            } else {
                task.completed = false;
            }
            return task;
        })
        return convertedTasks;
    });
}


function addTask(task) {
    return db('tasks').insert(task).then(result => {
        return result;
    })
}