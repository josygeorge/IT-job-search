import express, { urlencoded } from 'express';
// const express = require('express');
import dotenv from 'dotenv';

import './config/db.js';
import jobsRoute from './routes/jobs.js';
import usersRoute from './routes/users.js';

dotenv.config()

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// USERS
app.use('/api/users', usersRoute);
// JOBS
app.use('/api/jobs', jobsRoute);

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => `Server is running at ${PORT}`);