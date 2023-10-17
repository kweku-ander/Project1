import express from "express";
import likesController from "../controllers/likesController.js";

const router = express.Router();
router.put("/:id", likesController.getPostLike);
router.get("/:id", likesController.getAllLikes);

export default router;