const express = require("express");
const { setPost, editPost, deletePost, dislikePost, likePost, getPosts } = require("../controllers/postControllers");
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

router.patch("/like_post/:id", likePost);

router.patch("/dislike_post/:id", dislikePost);

module.exports = router;