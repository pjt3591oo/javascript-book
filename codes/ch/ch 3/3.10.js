const http = require('http');

http.createServer( (req, res) => {
    let { url, headers, method } = req

    if(method === 'POST') {
        res.writeHead(200);
        if(url === '/user'){
            res.end('/user 정보추가');
        }else if(url === '/board'){
            res.end('/board 게시글추가');
        }else if(url === '/cloth'){
            res.end('/cloth 옷 추가');
        }
    }

    res.writeHead(404);
    res.end('Not Found Page!');

}).listen(3000, () => {
    console.log('server on : 3000port')
});
