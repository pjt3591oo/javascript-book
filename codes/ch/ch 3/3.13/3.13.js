const fs = require('fs')

fs.readFile('./test1.html', function(err, data){
    if(!err) {
        console.log('test.html 파일읽기 성공')
        console.log(data)
        console.log(data.toString())
        return
    }
    console.log(err)
})

fs.readFile('./test.txt', function(err, data){
    if(!err) {
        console.log('test.txt 파일읽기 성공')
        console.log(data)
        console.log(data.toString())
        return
    }
    console.log(err)
})
