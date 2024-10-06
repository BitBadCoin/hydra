const Sequelize = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize(
    "hydra",
    'ortem',
    'p@ss4@rTeM!(*%', {
        host: 'localhost',
        dialect: 'postgres'
  });

export default async function Page() {

    try {
        await sequelize.authenticate();
    } catch (error) {
        return (
            `<h5>Connection authenticate error: ${error}</h5>`
        );
    }

    try {
        await sequelize.close();
    } catch (error) {
        return (
            `<h5>Connection close error: ${error}</h5>`
        );
    }

    return (
        `<h5>Connection check successfull.</h5>`
    );

}