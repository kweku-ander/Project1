import express from "express";
import sequelize from "./db/dbConfig.js";



const app = express();

const port = 5000;

try {
    await sequelize.authenticate();
    console.log('connected successfully');
} catch (error) {
    console.log('unable to access database: ', error);
}

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});

(async () => {
    await sequelize.sync();
})();
