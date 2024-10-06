const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "hydra",
    'ortem',
    'p@ss4@rTeM!(*%', {
        host: 'localhost',
        dialect: 'postgres'
  });

async function Page() {

    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log(`<h5>Connection authenticate error: ${error}</h5>`);
    }

    try {
        await sequelize.close();
    } catch (error) {
        console.log(`<h5>Connection close error: ${error}</h5>`);
    }

    console.log(`<h5>Connection check successfull.</h5>`);

}


(async () => {
    await Page();
})()