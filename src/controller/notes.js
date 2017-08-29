const express = require('express');
const { Router } = express;
const router = Router();
const notes = require('./../model/queries/notes.js');





router.get('/notes/:userId', ({ params: { userId } }, res, next) => {
  notes
    .getNotes(userId)
    .then(note => res.status(200).json(note))
    .catch(err => next(err));
});

