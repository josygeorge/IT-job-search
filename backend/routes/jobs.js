const express = require('express');
const router = express.Router();
const Jobs = require('../models/jobs');

router.get('/all-jobs', async (req, res) => {
    try {
        const allJobs = await Jobs.find();
        res.send(allJobs);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;