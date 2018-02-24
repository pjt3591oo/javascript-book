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
    }).on('error', (err) => {
      console.log(err)
    });

    if(method === 'POST') {
        res.writeHead(200);
        if(url === '/user'){
            console.log('tt')
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
