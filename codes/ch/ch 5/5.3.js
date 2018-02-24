const fs = require('fs')


const thirdFs = () => {
    fs.readFile('./test.txt', (err, data) => {
        console.log(3)
        console.log(data.toString())
        console.log('test')
    })
}

const secondFs = () => {
    fs.readFile('./test.txt', (err, data) => {
        console.log(2)
        console.log(data.toString())
        thirdFs()
    })
}

const firstFs = () => {
    fs.readFile('./test.txt', (err, data) => {
        console.log(1)
        console.log(data.toString())
        secondFs()
    })
}

firstFs()
