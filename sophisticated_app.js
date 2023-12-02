/*
 * Filename: sophisticated_app.js
 * 
 * Description: A sophisticated, elaborate, and complex JavaScript application showcasing various concepts and techniques.
 * 
 * Author: Your Name
 * 
 * Date: YYYY-MM-DD
 */

// Importing necessary libraries/modules
const fs = require('fs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const utilityModule = require('./utility_module');

// Global variables
const BASE_URL = 'http://localhost:8080';
let counter = 0;
let data = [];

// Express App Setup
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Custom Middleware
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my sophisticated app!');
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/data', (req, res) => {
  const newEntry = {
    id: counter++,
    timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    content: req.body.content,
  };
  data.push(newEntry);
  res.json(newEntry);
});

app.get('/api/download', (req, res) => {
  const fileName = `data_${moment().format('YYYYMMDDHHmmss')}.json`;
  fs.writeFile(fileName, JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.download(fileName, (err) => {
        if (err) {
          res.status(500).json(err);
        } else {
          fs.unlink(fileName, () => {}); // Delete the file after downloading
        }
      });
    }
  });
});

// Starting the HTTP server
http.createServer(app).listen(8080, () => {
  console.log('Server is running at', BASE_URL);
  utilityModule.printMessage('The server has started.');
});

// Utility Module Definition
(function () {
  const utilityModule = {};

  utilityModule.printMessage = (message) => {
    console.log(message);
  };

  // Other utility functions...

  module.exports = utilityModule;
})();