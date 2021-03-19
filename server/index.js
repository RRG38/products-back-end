require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

const { SERVER_PORT } = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server rockin out on ${SERVER_PORT}FM`);
});

