const db = require('../data/db-config');

module.exports = {
getProjects,
addProject,
getProjectById
}



function getProjects() {
    return db('projects')
    .then(projects => {
        const convertedProjects = projects.map(project => {
            if(project.completed === 1) {
                project.completed = true;
            } else {
                project.completed = false;
            }
            return project;
        })
        return convertedProjects;
    });
}

function addProject(project) {
    return db('projects').insert(project)
    .then(result => {
        return result;
    })
}

function getProjectById(id) {
    
   return db('projects').where({id: id}).first().then(result => {
   
      return getTasksByProjectId(id).then(res => {
            result.tasks = res;
            return result;
      })
    });
}

function getTasksByProjectId(id) {
    return db('tasks').where({project_id: id}).then(result => result)
}