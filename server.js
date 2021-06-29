const express = require('express');
const path = require('path');
const app = express();



app.use(express.json())


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})




const port = process.env.PORT || 4000

app.listen(port, function()
{console.log(`working on ${port}`)
})