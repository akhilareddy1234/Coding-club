import express from 'express';
var app = express();
let count = 0;
app.get('/netID', function (req, res) {
    count++
    res.send(`<p>Name: Akhila Reddy Bukkasamudram NetID:cl2103</p>
    <p>This page has been visited ${count} times.</p>`);
});

const port = '535';
const host = '127.0.230.56'

app.listen(port, host, function () {
    console.log(`Date and Time: ${host}:${port}`);
});