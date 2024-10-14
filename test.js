const {db} = require("./db");

const employees = [
    {
        name: "Artem Kutlyev",
        number: 1
    },{
        name: "Andrey Spiridonov",
        number: 2
    }
]

(async () => {

    const {Test} = await db();

    for (const [name, number] of Object.entries(employees)) {
        console.log({name, number});
    }

})()