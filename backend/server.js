import express, { urlencoded } from 'express';
// const express = require('express');
import dotenv from 'dotenv';
import path from 'path';
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

// Production config
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('frontend/build'));
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend/build/index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('API Running');
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server is running at ${PORT}`);