const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.use(express.json());

app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong')
})

//Define body parser middleware for request body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Define the path to your static files (CSS and JavaScript)
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

