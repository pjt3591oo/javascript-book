module.exports = function(sequelize, DataTypes) {
    let users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER(11),
            defaultValue: 25
        }
    }, {
    })
    ;
    users.associate = function (models) {
        users.hasMany(models.boards);
        // 추가되는 관계에 대해서 추가할 수 있음.
    };
    // users.associate = function (models) {
    //     users.hasMany(models.boards, {foreignKey: 'uId'});
    // };
    return users
};
