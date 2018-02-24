module.exports = function(sequelize, DataTypes) {
    let boards = sequelize.define('boards', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
        },
        content: {
            type: DataTypes.TEXT,
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }, {
    });

    boards.associate = function (models) {
        boards.belongsTo(models.users);
        // 추가되는 관계에 대해서 추가할 수 있음.
    };
    // boards.associate = function (models) {
    //     boards.belongsTo(models.users, {foreignKey: 'uId', targetKey: 'id'});
    // };
    return boards
};
