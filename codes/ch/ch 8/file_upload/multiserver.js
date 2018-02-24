const fs = require('fs');
const express = require('express')
const multer = require('multer')
let upload = multer({ dest: './uploads/' });
let app = express()

app.get('/multi', (req, res) => {
    fs.readFile('multi.html', 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

app.post('/multiupload', upload.array('file'), (req, res) => {
    console.log(req.body)
    console.log(req.files)
    res.status(204).end()
});

app.listen(3000, () => {
    console.log('server on 3000 port')
});
