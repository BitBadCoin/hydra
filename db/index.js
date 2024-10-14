const sequelize = require('./associations');

module.exports = async (alter = true) => {
    
    await sequelize.sync({alter: alter})
    
    return sequelize.models;
}
