"use strict";

var express = require("express");

var db = require("../models");

var router = express.Router();
router.get("/", function (req, res) {
  res.send("Hello!");
});
router.post("/post", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.Post.create({
            title: req.body.title,
            content: req.body.content
          }));

        case 3:
          // await db.Post_vote.create({
          // })
          res.status(200).send("gotit");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          res.status(400).send(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
router.get("/getpost/:offset", function _callee2(req, res) {
  var offset, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          offset = req.params.offset;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(db.Post.findAll({
            limit: 10,
            order: [["id", "DESC"]],
            offset: 10 * parseInt(offset)
          }));

        case 4:
          data = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(res.json(data));

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          res.send(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 9]]);
});
router.post("/post_comment", function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log(req.body);
          _context3.next = 4;
          return regeneratorRuntime.awrap(db.Comment.create({
            content: req.body.data,
            PostId: req.body.postId
          }));

        case 4:
          res.status(200).send("comment_posted");
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(400).send(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get("/get_a_post/:pid", function _callee4(req, res) {
  var postId, post;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          postId = req.params.pid;
          _context4.next = 3;
          return regeneratorRuntime.awrap(db.Post.findOne({
            where: {
              id: postId
            }
          }));

        case 3:
          post = _context4.sent;
          res.json(post);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get("/get_comments/:pid", function _callee5(req, res) {
  var postId, comments;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          postId = req.params.pid;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(db.Comment.findAll({
            where: {
              PostId: postId
            },
            order: [["id", "DESC"]]
          }));

        case 4:
          comments = _context5.sent;
          res.json(comments);
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.status(400).send(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
router.get("/vote_post/:pid", function _callee6(req, res) {
  var postId, prevVote;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          postId = req.params.pid;
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(db.Post_vote.findOne({
            where: {
              PostId: postId
            }
          }));

        case 4:
          prevVote = _context6.sent;
          // await db.Post_vote.update({ vote: })
          res.json(prevVote);
          _context6.next = 10;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;