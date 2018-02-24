var express = require('express')
var { Nuxt, Builder } =require('nuxt')

var config = require('../nuxt.config.js')

const app = express()

const nuxt = new Nuxt(config)

const builder = new Builder(nuxt)
builder.build()

app.use(nuxt.render)

var port = 3000

app.listen(port, () => {
    console.log('Server listening on '+ ':' + port)
})
