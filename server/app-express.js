/**
 * @author drxiao
 */
const path = require('path');
const fs = require('fs');

const express = require('express');

const port = '80';

const app = express();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// health check
app.get('/healthcheck', (req, res) => {
  res.send('OK');
});

app.get('/', (req, res) => {
  const data = fs.readFileSync(`${__dirname}/../dist/index.html`, 'utf8');
  res.send(data);
});

// static file serve
app.use(
  '/dist',
  express.static(path.join(__dirname, '../dist'), { maxAge: 86400000 }),
);

// start up
app.listen(port);
console.log('started');

module.exports = app;
