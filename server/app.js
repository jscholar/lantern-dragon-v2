const express = require("express");
const bodyParser = require("body-parser");

const COMMENT_PATH = './models/';
const COMMENT_MODEL = 'comment.model.js';

const Comment = require(COMMENT_PATH + COMMENT_MODEL);
const mongoose = require('mongoose');

let pass = '4LHLKB3o43lDctef';

const uri = 'mongodb+srv://Icarus:4LHLKB3o43lDctef@lantern-dragon-usbui.mongodb.net/comments?retryWrites=true';

mongoose.connect(uri)
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('Failed to connect to database');
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/posts", (req, res, next) => {
  Comment.find()
    .then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        comments: documents
      });
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
  console.log(req.params.id);
  Comment.deleteOne({_id: req.params.id})
    .then(result => {
      console.log(result);
      res.status(200).json({message: "Comment deleted"})
    })
});

app.post("/api/posts", (req, res, next) => {
  const comment = new Comment({
    user: req.body.user,
    content: req.body.content,
    date: req.body.date
  });
  comment.save()
    .then(newComment => {
      console.log(newComment);
      res.status(201).json({
        message: 'Post added successfully',
        commentId: newComment.id
      });
    });
});

module.exports = app;
