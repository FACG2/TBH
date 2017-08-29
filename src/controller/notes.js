const express = require('express');
const { Router } = express;
const router = Router();
const notes = require('./../model/queries/notes.js');

router.get('/users/:userId', (req, res) => {
  notes.getNotes(req.params.userId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('notes', { activePage: { notes: true }, notes });
    }
  });
});


router.post('/notes/:userId/addNote', (req, res) => {
  notes.addNote(req.params.userId, req.body.content , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



module.exports = router;
