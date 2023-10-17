import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/",userController.registerUsers);
router.get("/:id",userController.getUser);
router.get("/",userController.getAllUsers);
router.put("/:id",userController.updateUsers);
router.delete("/:id",userController.deleteUsers);

export default router;