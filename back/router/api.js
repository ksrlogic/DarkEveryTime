const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello!");
});
router.post("/post", async (req, res) => {
  try {
    await db.Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).send("gotit");
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/getpost/:offset", async (req, res) => {
  const offset = req.params.offset;
  try {
    const data = await db.Post.findAll({
      limit: 10,
      order: [["id", "DESC"]],
      offset: 10 * parseInt(offset),
    });
    await res.json(data);
  } catch (err) {
    res.send(err);
  }
});
router.post("/post_comment", async (req, res) => {
  try {
    await db.Comment.create({
      content: req.body.content,
      PostId: req.body.postId,
    });
    res.status(200).send("comment_posted");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get(`/get_a_post/:pid`, async (req, res) => {
  const postId = req.params.pid;
  const post = await db.Post.findOne({
    where: {
      id: postId,
    },
  });
  res.json(post);
});
module.exports = router;
