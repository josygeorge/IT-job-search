import express from 'express';
const router = express.Router();

import { getAllJobs, createNewJob, editJob } from '../controllers/jobsController.js';

router.get('/all-jobs', getAllJobs);
router.post('/post-new-job', createNewJob);
router.post('/edit-job', editJob);

export default router;






// router.get('/all-jobs', async (req, res) => {
//     try {
//         const allJobs = await Jobs.find();
//         res.send(allJobs);
//     } catch (error) {
//         return res.status(400).json({ error });
//     }
// });

// router.post('/post-new-job', async (req, res) => {
//     try {
//         const newJob = new Jobs(req.body);
//         await newJob.save();
//         res.send('Job Posted Successfully')
//     } catch (error) {
//         return res.status(400).json(error);
//     }
// });
// router.post('/edit-job', async (req, res) => {
//     try {
//         await Jobs.findOneAndUpdate(
//             { _id: req.body._id },
//             req.body
//         );
//         res.send('Job Updated!')
//     } catch (error) {
//         return res.status(400).json(error);
//     }
// })

// export default router;