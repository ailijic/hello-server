"use strict";

let express = require('express');
let app = express();

app.get('/', respond);
app.get('/:arg1', respond);
app.get('/:arg1/:arg2', respond);

function respond (req, res) {
  const arg1 = req.params.arg1;  
  const arg2 = req.params.arg2;  
  switch (arg1) {
    case "headers":
			sendHeaders(arg2);
    case "json":
      res.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
      });
      break;
    case "version":
      res.json(req.httpVersion);
      break;
    default:
      sendText(arg1, arg2);
  }
  function sendHeaders (arg) {
    if (arg === undefined) {
      res.json(req.headers);
    } else {
      res.json(req.headers[arg]);
    }
  }
  function sendText (arg1, arg2) {
    if ((arg1 === undefined) && (arg2 === undefined)) {
      res.send("Hello World");
    } else if (arg2 !== undefined) {
      res.send(["Hello", arg1, arg2].join(" "));
    } else {
      console.log("Something Went Wrong");
    }
  }
}
app.listen(process.env.PORT || 8080, process.env.IP);
