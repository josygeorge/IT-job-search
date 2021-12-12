const express = require('express');
const dotenv = require('dotenv');
const db = require('./db.js');
const jobsRoute = require('./routes/jobs');

dotenv.config()

const app = express();

// GET ALL JOBS
app.use('/api/jobs', jobsRoute);

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => `Server is running at ${PORT}`);