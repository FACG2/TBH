const express = require('express');
const { Router } = express;
const router = Router();

const notes = require('./../model/queries/notes.js');
router.get('/notes/:userId', (req, res) => {
  // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqq', req.params);
  notes.getNotes(req.params.userId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('notes.hbs', { activePage: { notes: true }, notes: result});
    }
  });
});

// router.post('/addNote', (req, res) => {
//   console.log('body', req.body);
//   notes.addNote(req.body.user_id, req.body.content, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//       res.render('home.hbs', {});
//     }
//   });
// });

module.exports = router;
