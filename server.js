const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const Rollbar = require("rollbar");
const send = require('send');
const rollbar = new Rollbar({
  accessToken: '9e9dd72f3e6b487cb059b1611850ccaa',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello worldzz!");

app.use(express.json())


app.get('/', function(req, res) {fakeFunction();
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

let word = ['hot', 'dog', 'cat']

app.get('/api/word/', function (req, res){
    res.status(200).send(word);
});



const port = process.env.PORT || 4000

app.listen(port, function()
{console.log(`working on ${port}`)
})