
import userModel from '../models/userModel.js';

const registerUsers = async (req, res) =>{
  try{
  const addUser = req.body;

  const email = addUser.email ;
  const existingUser = await userModel.findOne({where:{email}});

  if (existingUser){
    return res.status(409).json({messaage:"User already exist"});

  }
  const newUser = await userModel.create(addUser);
  if (newUser) {
    return res.status(201).json({message:"Successful", newUser});
  }

} catch (error){
  console.log(error);
  return res.status(500).json({message:"Unable to create"});
}
};

// get a user 
    const getUser = async (req,res) => {
      try {
    const{id} = req.params;
    if (id){
      return res.status (409).json({message:"User not found"});
    }
    const user = await userModel.findOne({where:{id}});
    if(user){
      return res.status(200).json({message:"Successful", user});
    }

      } catch(error){
        console.log(error);
          return res.status(500).json({message:"Unable to send message, server side error"});
      }
      };
  
    // get allUSers

    const getAllUsers = async (req,res) => {
      try {
        const users = await userModel.findAll();
       
        return res.status(200).json({message: "Successful",users})


      } catch(error) {
        console.log(error)
        return res.status(500).json({message:"server error"});
      }
    };

    // update user

    const updateUsers = async(req,res) => {
      try{
        const {id}= req.params;
        const updateInfo =req.body;
        if (!id){
          return res.status(409).json({message:"User not found"});
        }
        const update = await userModel.update(updateInfo,{where:{id}});
        return res.status(200).json({message:"update successfuly",update})

      }catch(error){
        console.log(error)
        return res.status(500).json({message:"server error"});
      }
    }
     // delete user
    const deleteUsers = async(req,res) =>{
      try{
        const {id} =req.params;
        if (!id){
          return res.status(409).json({message:"User not found"});
        }
        const deleted = await userModel.destroy({where:{id}});
          return res.status(200).json({message:"delete successully",deleted});
      
        

      } catch(error){
        console.log(error)
        return res.status(500).json({message:"server error"});

      }
    };

    export default {registerUsers, getUser,getAllUsers,updateUsers,deleteUsers};