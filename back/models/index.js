"use strict";
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Post = sequelize.define(
  "Post",
  {
    title: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    vote: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

const Comment = sequelize.define(
  "Comment",
  {
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    vote: {
      type: Sequelize.INTEGER(5),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

db.Post = Post;
db.Comment = Comment;

Post.hasMany(Comment);
Comment.belongsTo(Post);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
