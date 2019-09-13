const db = require('../data/db-config');

module.exports = {
getProjects,
addProject
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