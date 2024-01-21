var express = require('express')
var router = express.Router();
const dailyRecord = require('../controllers/dailyRecord')

router.get('/dailyRecord', async(req, res) => {
    try {
        const result = await dailyRecord.readAll(req, res);
        res.send(result)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }});

module.exports = router;