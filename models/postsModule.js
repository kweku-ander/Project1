import sequelize from "../db/dbconfig.js";
import { DataTypes } from "sequelize";

const posts = sequelize.define("posts",{
    id:{
        type:DataTypes.UUID,
        defaultValue: true,
        primaryKey:true,
        allowNull: false
    },

    title:{
        type: DataTypes.STRING,
        allowNull:false
    },

    slug:{
        type: DataTypes.STRING,
        allowNull:false
    },

    content:{
        type: DataTypes.STRING,
        allowNull:false
    },

    user_id:{
        type:DataTypes.UUID,
        references:{
            model:"users",
            key: "id"
        }}
})

(async()=>{
    await sequelize.sync()
})();

export default posts;