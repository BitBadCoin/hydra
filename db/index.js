const sequelize = require('./associations');


module.exports = async () => {
    
    await sequelize.sync()
    
    return sequelize.models;
}
