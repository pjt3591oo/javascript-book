const http = require('http');

http.createServer( (req, res) => {
    let resData = '<html><body><h1>!!!!!hello world!!!!!</h1></body></html>'
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(resData);

}).listen(3000, () => {
    console.log('server on : 3000port')
});
