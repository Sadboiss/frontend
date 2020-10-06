require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/customers', (req, res) => {
  console.log(req)
  console.log(res)
});

app.get('/api/customers/:id', (req, res) => {
  console.log(req)
  console.log(res)
});

app.get('/api/customers/auth', (req, res) => {
  console.log(req.params)
  console.log(res)
});


app.listen(5000, () =>
  console.log('Express server is running on localhost:3001')
);