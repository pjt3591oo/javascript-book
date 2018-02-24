module.exports = function(sequelize, DataTypes) {
    let clothes = sequelize.define('clothes', {
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
        price: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(255)
        }
    }, {
    })
    ;
    clothes.associate = function (models) {
        clothes.hasMany(models.purchase);
    };
    return clothes
};
