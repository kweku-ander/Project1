import express from "express";
import sequelize from "./db/dbconfig.js";
import bodyParser from "body-parser";
import postRouter from "./route/postsRoute.js";
import userRouter from "./routes/userRoute.js";
import likesRoute from "./routes/likesRoute.js";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use("/post", postRouter)
app.use("/user",userRouter);
app.use("/likes", likesRoute);

try{
    await sequelize.authenticate();
    console.log('Connected succesfully');
}catch (error){
    console.log("unable to access database: ",error);
};

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});

(async() => {
await sequelize.sync();

})();


