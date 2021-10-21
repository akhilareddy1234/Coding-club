import express from 'express';
var app = express();
var datetime= new Date();
app.get('/date', function (req, res) {
    res.send(`Name: Akhila Reddy Bukkasamudram ${datetime}`);
});

const port = '545';
const host = '127.0.230.51'

app.listen(port, host, function () {
    console.log(`Date and Time: ${host}:${port}`);
});


