const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize.js");

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

module.exports = sequelize