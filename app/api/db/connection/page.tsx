import { Sequelize } from '@sequelize/core';

const sequelize = new Sequelize({
    dialect: "postgres",
    database: 'hydra',
    user: 'ortem',
    password: 'p@ss4@rTeM!(*%',
    host: 'localhost',
    port: 5432,
    ssl: true,
    clientMinMessages: 'notice',
  });

export default async function Page() {

    try {
        await sequelize.authenticate();
    } catch (error) {
        return (<h5>Connection authenticate error: {error}</h5>);
    }

    try {
        await sequelize.close();
    } catch (error) {
        return (<h5>Connection close error: {error}</h5>);
    }

    return (
        <h5>Connection check successfull.</h5>
    )

}