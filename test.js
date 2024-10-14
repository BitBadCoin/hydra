const { default: test } = require("node:test");
const db = require("./db");
const { where } = require("./db/sequelize");

const employees = [
    {
        name: "Artem Kutlyev",
        number: 1
    },{
        name: "Andrey Spiridonov",
        number: 2
    }
]

async function start() {

    const { Test } = await db();

    for (const user of Object.entries(employees)) {
        
        const user = await Test.findOrCreate({
            where: user
        })
    }

}

start();