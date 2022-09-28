const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.get('/gratitude', function (req, res) {
  db.getEntryByDate(req.query, (err, result) => {
    if(err) {
      console.log(err)
    } else {
      res.json(result);
    }
  })
});

app.post('/gratitude', function (req, res) {
  db.saveEntry(req.query, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
