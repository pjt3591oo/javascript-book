const Sequelize = require('sequelize')

const db = 'boards'
const user = 'root'
const password = ''
const options = {
    host: '127.0.0.1',
    dialect: 'mysql'
}

let sequelize = new Sequelize(db, user, password, options)
