const http = require('http');

http.createServer( (req, res) => {

    let { url, headers, method } = req
    console.log(url, method)

    res.writeHead(200);
    res.end('hello world');
}).listen(3000, () => {
    console.log('server on : 3000port')
});
