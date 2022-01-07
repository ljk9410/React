const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/react', express.static(path.join(__dirname, 'react-project/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/main.html'));
});

app.get('/react', function (req, res) {
  res.sendFile(path.join(__dirname, 'react-project/build/index.html'));
});

app.listen(8080, () => { console.log(`listening on PORT:8080`) });