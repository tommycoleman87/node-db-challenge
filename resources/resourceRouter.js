const express = require('express');
const router = express.Router();
const Resources = require('./resourceHelper');
router.get('/', (req, res) => {
    Resources.getResources()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    const resource = req.body;
    Resources.addResource(resource)
    .then(result => {
        res.status(201).json(result)
    })
})
module.exports = router;