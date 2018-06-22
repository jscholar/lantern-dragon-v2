const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const comments = [
    {
      id: '23io1j4kl',
      name: 'Icarus',
      content: 'Someone please comment',
      date: Date.now()
    },
    {
      id: '123j4hejr3',
      name: 'DeltaOg',
      content: 'No, fuck you',
      date: Date.now()
    }
  ];
  res.status(200).json({
    message: 'Posts fetched',
    comments: comments
  })
});

module.exports = app;
