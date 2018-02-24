const fs = require('fs')

const _p = (val) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./test.txt', (err, data) => {
            if(err) reject(err)
            resolve(`${val} : ${data.toString()}`)
        })
    })
}

Promise.all([_p('1'), _p('2'), _p('3')]).then((result) => {
    console.log(result)
})
