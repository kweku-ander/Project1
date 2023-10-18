import express from "express";
import * as dotenv from "dotenv";
import sequelize from "./db/dbConfig.js";
import bodyParser from "body-parser";
import postRouter from "./routes/postsRoute.js";
import userRouter from "./routes/userRoute.js";
import likesRoute from "./routes/likesRoute.js";

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
dotenv.config();
app.use("/post", postRouter)
app.use("/user",userRouter);
app.use("/likes", likesRoute);

try{
    await sequelize.authenticate();
    console.log('Connected succesfully');

     app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});

}catch (error){
    console.log("unable to access database: ",error);
};

// app.listen(port,()=>{
//     console.log(`App is listening on port ${port}`)
// });

(async() => {
await sequelize.sync();

})();


