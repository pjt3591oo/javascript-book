const fs = require('fs')

const http = require('http');

http.createServer( (req, res) => {
    fs.readFile('./test.html', (err, data) => {
        if(!err){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
            return
        }
        res.writeHead(500)
        res.end('서버에 문제가 발생했습니다.')
    })
}).listen(3000, () => {
    console.log('server on : 3000port')
})
