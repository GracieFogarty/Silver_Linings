const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.get('/gratitude', (req, res) => {
  db.getEntryByDate((err, result) => {
    if(err) {
      console.log(err)
    } else {
      res.json(result);
    }
  })
});

app.post('/gratitude', (req, res) => {
  db.saveEntry(req.body, (err) => {
    if(err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  })
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(process.env.PORT || 8080);
