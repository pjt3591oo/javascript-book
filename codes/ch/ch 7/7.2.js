const Sequelize = require('sequelize')

const db = 'boards'
const user = 'root'
const password = ''
const options = {
    host: '127.0.0.1',
    dialect: 'mysql'
}

let sql = new Sequelize(db, user, password, options)

let users = sql.define('users', {
    id: {
        type: Sequelize.DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    age: {
        type: Sequelize.DataTypes.INTEGER(11),
        defaultValue: 25
    }
}, {
    tableName: 'users',
    freezeTableName: false,
    timestamps: false
});

users.findAll({raw: true}).then(result => {
    console.log(result)
})
