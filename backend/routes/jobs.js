import express from 'express';
const router = express.Router();
import Jobs from '../models/jobs.js';

router.get('/all-jobs', async (req, res) => {
    try {
        const allJobs = await Jobs.find();
        res.send(allJobs);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/post-new-job', async (req, res) => {
    try {
        const newJob = new Jobs(req.body);
        await newJob.save();
        res.send('Job Posted Successfully')
    } catch (error) {
        return res.status(400).json(error);
    }
})

export default router;