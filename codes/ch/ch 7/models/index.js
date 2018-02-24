const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const databaseName = 'boards'
const user = 'root'
const password = ''
const options = {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
}

let sequelize = new Sequelize(databaseName, user, password, options)
let db        = {};

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sql = sequelize;
db.S = Sequelize;

sequelize.sync();

module.exports = db;
