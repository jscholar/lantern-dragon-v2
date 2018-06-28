const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Headers", "Origin X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const message = req.body;
  console.log(message);
});

app.get("/api/posts", (req, res, next) => {
  const comments = [
    {
      id: '23io1j4kl',
      user: 'Icarus',
      content: 'Someone please comment',
      date: Date()
    },
    {
      id: '123j4hejr3',
      user: 'DeltaOg',
      content: 'No, fuck you',
      date: Date()
    }
  ];
  res.status(200).json({
    message: 'Posts fetched',
    comments: comments
  })
});

module.exports = app;
