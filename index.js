"use strict";

let express = require('express');

let app = express();

app.get('/', function(request, response) {
  response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
  let first = request.params.firstname;
  let last = request.params.lastname;
  response.send(["Hello", first, last].join(" "));
});

app.listen(process.env.PORT || 8080, process.env.IP);
