module.exports = function(sequelize, DataTypes) {
    let users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        uid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0
        },
        status: {
            type: DataTypes.INTEGER(11),
            defaultValue: 1
        }
    }, {
    })
    ;
    users.associate = function (models) {
        users.hasMany(models.purchase);
    };
    return users
};
