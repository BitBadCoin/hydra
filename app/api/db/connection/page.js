const Sequelize = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize(
    "hydra",
    'ortem',
    'p@ss4@rTeM!(*%', {
        host: 'localhost',
        dialect: 'postgres',
        dialectModule: pg,
  });

export default async function Page() {

    try {
        await sequelize.authenticate();
    } catch (error) {
        return (
            `<h5>Connection authenticate error: ${error}</h5>`
        );
    }

    return (
        `<h5>Connection check successfull.</h5>`
    );

}