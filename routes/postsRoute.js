import express from "express";
import postsController from "../controller/postsController.js"
const router = express.Router();

router.post("/", postsController.createPost);
router.put("/", postsController.updatePost);
router.get("/", postsController.getPost);
router.get("/", postsController.getAllPosts);
router.delete("/:id", postsController.deletePost);

export default router;
