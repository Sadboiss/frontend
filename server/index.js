require('dotenv').config();
const port = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
// const cors = require("cors");

const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/', (req, res) => {
  res.send({ message: "We did it!" });
});

app.get('/api/users/:id', (req, res) => {
  console.log(req)
  console.log(res)
});

app.post('/api/users/authenticate', (req, res) => {
  console.log(req)
  console.log(res)
});


app.listen(port, () =>
  console.log(`Backend is listening on port ${port}`)
);