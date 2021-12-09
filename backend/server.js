const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => `Server is running at ${PORT}`);