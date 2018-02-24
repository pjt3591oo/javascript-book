const fs = require('fs')

const _p = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./test.txt', (err, data) => {
            if(err) reject(err)
            resolve(data.toString())
        })
    })
}

_p().then((result) =>{
    console.log(1)
    console.log(result)
    return _p()
}, (err) => {
    console.log('err 발생')
    console.log(err)
    return _p()
}).then((result) => {
    console.log(2)
    console.log(result)
    return _p()
}, (err) => {
    console.log('err 발생')
    console.log(err)
    return _p()
}).then((result) => {
    console.log(3)
    console.log(result)
}, (err) => {
    console.log('err 발생')
    console.log(err)
    return _p()
})
