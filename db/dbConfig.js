import  Sequelize from "sequelize";

const sequelize = new Sequelize ("mini_project", "root", "",{
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
