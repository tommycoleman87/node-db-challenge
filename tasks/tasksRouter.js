const express = require('express');
const router = express.Router();
const Tasks = require('./tasksHelpers');
router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    const task = req.body;
    Tasks.addTask(task)
    .then(result => {
        res.status(201).json(result)
    })
})
module.exports = router;