const express = require('express');
const path = require('path');
const app = express();
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '9e9dd72f3e6b487cb059b1611850ccaa',
  captureUncaught: true,
  captureUnhandledRejections: true
});



app.use(express.json())


app.get('/', function(req, res) {
    rollbar.log("Hello world!");
    res.sendFile(path.join(__dirname, '/public/index.html'))
})




const port = process.env.PORT || 4000

app.listen(port, function()
{console.log(`working on ${port}`)
})