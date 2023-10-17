import express from "express";
import sequelize from "./db/dbConfig.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoute.js"


const app = express();
app.use(bodyParser.json());
const port = 5110;

app.use("/user",userRouter);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  console.log('kugzo you are doing good');

  app.listen(port,() =>{
    console.log(`App is listening on port:${port}`);
  });

} catch (error) {
  console.error('Unable to connect to the database:', error);
}
(async() => {
await sequelize.sync();

})();

