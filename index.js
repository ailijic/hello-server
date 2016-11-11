"use strict";

let express = require('express');

let app = express();

app.get('/', function(request, response) {
  response.send("Hello World");
});

app.listen(process.env.PORT || 8080, process.env.IP);
