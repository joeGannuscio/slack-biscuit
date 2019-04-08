var express = require('express');

var app = express();

app.listen(3000, () => console.log('app listening on port 3000'));

app.get('/', (req, res) => res.send("hello world"));