
const express = require('express');
const { Router } = express;
const router = Router();

const notes = require('./../model/queries/notes.js');
router.get('/notes/:userId', (req, res , next) => {
  notes.getNotes(req.params.userId, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('notes.hbs', { activePage: { notes: true }, notes: result});
    }
  });
});

router.get('/users/:reciever_Id/addNote', (req, res) => {
  // console.log(req.params.reciever_Id);
  res.render('addNote.hbs', {reciever_Id: req.params.reciever_Id});
});

router.post('/users/:reciever_id/addNote', (req, res) => {
  notes.addNote(req.params.reciever_id, req.body.content, (err, result) => {
    if (err) {
      next(err);
    } else {
       res.redirect(`/users/${req.params.reciever_id}/addNote`);
    }
  });
});

module.exports = router;
