import { Sequelize } from "../../../../node_modules/@sequelize/core";
import { PostgresDialect } from "../../../../node_modules/@sequelize/postgres";

const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: "hydra",
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