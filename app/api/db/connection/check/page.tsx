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



import { useState } from 'react';

export default async function Page() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <input type='text' value = {count}/>
        <button onClick={handleClick}/>
    )


    /*
    try {
        await sequelize.authenticate();
    } catch (error) {
        return (
            <h5>Connection authenticate error: {error}</h5>
        );
    }

    return (
        <h5>Connection check successfull.</h5>
    );
    */
}