const { default: test } = require("node:test");

const employees = [
    {
        name: "Artem Kutlyev",
        number: 1
    },{
        name: "Andrey Spiridonov",
        number: 2
    }, {
        name: "Igor Radionov",
        number: 3
    }
]

const {Test} = require("../database/models")

async function start() {

    for (const employee of employees) {
        
        //console.log(employee);
        
        const test = await Test.findOrCreate({
            where: employee
        })

    }

}

start();