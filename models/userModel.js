import sequelize from "../db/dbConfig.js";
import DataTypes from "sequelize";
import post from "./postsModel.js";

const user = sequelize.define("users",{
 id:{
  type:DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey:true,
  allowNull:false,
 },
 username:{
  type: DataTypes.STRING,
  allowNull:false,
 },
 email:{
  type:DataTypes.STRING,
  allowNull:false,
  validate:{
  isEmail:true,
  }
 },
 password:{
  type:DataTypes.STRING,
  allowNull:false
},

},{ paranoid: true},

{timestamps: true});

user.hasMany(post,{foreignKey: "user_id"});
post.belongsTo(user,{foreignKey:"user_id"});
// user.hasMany(like{})

// user.hasMany(post,{foreignKey:"post_id"});

export default user;