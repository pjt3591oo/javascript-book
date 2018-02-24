const fs = require('fs')
const http = require('http')

http.createServer( (req, res) => {
    let {url} = req
    fs.readFile('.' + url, (err, data) => {
        if(!err){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
            return
        }else if (err && err['errno'] === -2){
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found File')
            return
        }
        res.writeHead(500)
        res.end('server error')
    })
}).listen(3000, () => {
    console.log('server on : 3000port')
})
