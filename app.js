import express from "express";
import sequelize from "./db/dbconfig.js";
import postRouter from "./route/postsRoute.js";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use("/post", postRouter)

try{
    await sequelize.authenticate();
    console.log('Connected succesfully');
}catch (error){
    console.log("unable to access database: ",error);
};
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});


(async()=>{
    await sequelize.sync()
})();