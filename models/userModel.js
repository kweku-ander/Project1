import sequelize from "../db/dbConfig.js";
import DataTypes from "sequelize";
// import post from "/postModel.js";

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

},{timestamps: true});

(async()=>{
  await sequelize.sync();
});

// user.hasMany(post,{foreignKey:"post_id"});

export default user;