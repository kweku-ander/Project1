import sequelize from "../db/dbConfig.js";
import DataTypes from "sequelize";

const user = sequelize.define("users",{
 id:{
  type:DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primarykey:true,
  allowNull:false,
 },
 username:{
  type: DataTypes.STRING,
  allowNull:false
 },
 email:{
  type:DataTypes.STRING,
  allowNull:false,
  isEmail:true
 },
 password:{
  type:DataTypes.STRING,
  allowNull:false
},

},{timestamps: true});

(async()=>{
  await sequelize.sync();
});

export default user;