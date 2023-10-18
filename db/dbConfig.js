
import Sequelize from "sequelize";
import * as dotenv from "dotenv";
dispatchEvent.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    logging: false
})

export default sequelize;
