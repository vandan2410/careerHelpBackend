import express from "express";
import {
  authenticateUser,
  validateUserPermissions,
} from "../middleware/auth.js";

import {
  addPost,
  editPost,
  getUserPosts,
  removePost,
  getAllPosts,
  getPostByCompanyId,
  getPostDetailsWithCompanyName
} from "../controller/post.js";
import {
  validatePayloadForEditPost,
  validatePayloadForNewPost,
} from "../middleware/post.js";

const router = express.Router();

router.post("/newPost/:userId", validatePayloadForNewPost, addPost);
router.get("/userPosts/:userId",  getUserPosts);
router.get("/getPosts",getAllPosts);
router.get('/getPostsbyCompanyId/:companyId',getPostByCompanyId)
router.get('/postwithcompanyname/:postId',getPostDetailsWithCompanyName);
router.put(
  "/editPost/:postId",
 
  validatePayloadForEditPost,
  editPost
);
router.delete(
  "/removePost/:postId",
  
  removePost
);

export default router;
