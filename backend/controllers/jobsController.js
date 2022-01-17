import Jobs from '../models/jobs.js';

export const getAllJobs = async (req, res) => {
    try {
        const allJobs = await Jobs.find().sort({ createdAt: -1 });
        res.send(allJobs);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const createNewJob = async (req, res) => {
    try {
        const newJob = new Jobs(req.body);
        await newJob.save();
        res.send('Job Posted Successfully')
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const editJob = async (req, res) => {
    try {
        await Jobs.findOneAndUpdate({ _id: req.body._id }, req.body);
        res.send('Job Updated!')
    } catch (error) {
        return res.status(400).json(error);
    }
}