const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '9e9dd72f3e6b487cb059b1611850ccaa',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello worldzz!");

app.use(express.json())


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// // test rollbar code
getQuerySubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:5050/api/inventory?item=${queryInput.value}`)
        .then(res => addToView(res.data))
});

// //python error
let num1 = 5
let num2 = 6
num1 + num2 = 12;



const port = process.env.PORT || 4000

app.listen(port, function()
{console.log(`working on ${port}`)
})