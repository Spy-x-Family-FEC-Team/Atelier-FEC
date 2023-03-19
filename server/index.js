// Because we don't know what our local server storage should look like yet, this is intentionally blank.
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp

require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.listen(3006);
// console.log(`Listening at http://localhost:${process.env.port}`);
// Couldn't get this working with env, so just hard-coded it. Please feel free to change this or anything about this file.
console.log('Listening at http://localhost:3006');

