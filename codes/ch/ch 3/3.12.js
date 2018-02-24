const http = require('http');

http.createServer( (req, res) => {
    let { url, headers, method } = req
    let body = {};

    req.on('data', (data) => {
      data.toString().split('&').map(item => {
          let s = item.split('=')
          let key = s[0]
          let value = s[1]
          body[key] = value
      })
    }).on('end', () => {
        for(let i = 0 ; i < 10; i ++){
            console.log(i)
        }

        if(method === 'POST') {
            res.writeHead(200);
            if(url === '/user'){
                console.log('tt')
                res.end('/user 정보추가');
            }
        }

        res.writeHead(404);
        res.end('Not Found Page!');

    }).on('error', (err) => {
        res.writeHead(500);
        res.end('Server Error!');
    });

}).listen(3000, () => {
    console.log('server on : 3000port')
});
