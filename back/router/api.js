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
    // await db.Post_vote.create({

    // })
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
    console.log(req.body);
    await db.Comment.create({
      content: req.body.data,
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

router.get("/get_comments/:pid", async (req, res) => {
  const postId = req.params.pid;
  try {
    const comments = await db.Comment.findAll({
      where: {
        PostId: postId,
      },
      order: [["id", "DESC"]],
    });
    res.json(comments);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/vote_post/:pid", async (req, res) => {
  const postId = req.params.pid;
  try {
    const prevVote = await db.Post_vote.findOne({
      where: {
        PostId: postId,
      },
    });
    // await db.Post_vote.update({ vote: })
    res.json(prevVote);
  } catch {}
});

module.exports = router;
