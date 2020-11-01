module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
        name: DataTypes.STRING, 
        devours: DataTypes.BOOLEAN
    });

    return Burger;
}