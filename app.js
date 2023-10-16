import express from "express"
import sequelize from "./db/dbconfig.js"

const app = express();
const port = 5000;

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