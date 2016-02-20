var express = require('express');

app.get('/', function (req, res) {
  res.send('Hi antony!');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
