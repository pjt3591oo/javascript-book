const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const databaseName = 'shop'   // 데이터 베이스 이름
const user = 'root'           // 데이터 베이스 접속 유저 이름
const password = ''           // 데이터 베이스 접속 유저 비밀번호
const options = {
    host: '127.0.0.1',      // 데이터 베이스 접속 아이피
    dialect: 'mysql'        // 데이터 베이스 종류
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

sequelize.sync(); // 모델과 디비간 싱크를 맞추는 부분

module.exports = db;
