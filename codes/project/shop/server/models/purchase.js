module.exports = function(sequelize, DataTypes) {
    let purchase = sequelize.define('purchase', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        count: {
            type: DataTypes.INTEGER(11),
            defaultValue: 1
        }
    }, {
    })
    ;
    purchase.associate = function (models) {
        purchase.belongsTo(models.clothes);
        purchase.belongsTo(models.users);
    };
    return purchase
};
