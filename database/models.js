const sequelize = require("./sequelize");

const { Sequelize, DataTypes, Model } = require('sequelize');

class Test extends Model {}

Test.init({
    name: {
        type: DataTypes.STRING,
    },
    number: {
        type: DataTypes.INTEGER,
    }
},{
    sequelize
});

module.exports = {
    Test
}