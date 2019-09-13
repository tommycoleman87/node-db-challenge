const express = require('express');
const projectsRouter = require('./projects/projectsRouter');
const tasksRouter = require('./tasks/tasksRouter');
const resourceRouter = require('./resources/resourceRouter');
const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourceRouter)

module.exports = server;