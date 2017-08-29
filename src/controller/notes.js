const express = require('express');
const { Router } = express;
const router = Router();

const notes = require('./../model/queries/notes.js');
router.get('/notes/:userId', (req, res) => {
  console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqq', req.params);
  notes.getNotes(req.params.userId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.render('notes', {notes});
    }
  });
});

module.exports = router;
