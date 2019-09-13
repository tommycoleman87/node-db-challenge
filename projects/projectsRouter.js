const express = require('express');
const router = express.Router();
const Projects = require('./projectsHelper');
router.get('/', (req, res) => {
    Projects.getProjects()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Projects.getProjectById(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    const project = req.body;
    Projects.addProject(project)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;