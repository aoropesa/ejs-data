const express = require('express');
const app = express();
const data = require('./data');

// Set view engine to ejs
app.set('view engine', 'ejs');

// index.page
app.get('/', function(req, res) {

  res.render('pages/index', {
    data: data,
  });
});

app.listen(8080, function() {
  console.log('Serving ejs magic on 8080!');
});
