import sequelize from "../db/dbconfig.js";
import DataTypes  from "sequelize";
import like from "./likesModel.js"

const posts = sequelize.define("posts",{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
        References:{
            model:"users",
            key: "id"
        }}
},{ paranoid: true}
);

posts.hasMany(like,{foreignKey: "post_id"});
like.belongsTo(posts, {foreignKey: user_id});

// posts.belongsToUser(user,{foreignKey: "user_id"});

export default posts;