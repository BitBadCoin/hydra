const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hydra', 'ortem', 'p@$$4@rtem2024', {
    host: 'localhost',
    dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    dialectModule: pg
  });

module.exports = sequelize