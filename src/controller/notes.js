
const notes = require('./../model/queries/notes.js');


exports.notes = (req, res , next) => {
  notes.getNotes(req.params.userId, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('notes.hbs', { activePage: { notes: true }, notes: result, userId: req.params.userId});
    }
  });
}

exports.addNote = (req, res) => {
  res.render('addNote.hbs', {reciever_Id: req.params.reciever_Id});
};

 exports.submitAddNote = (req, res, next) => {
  notes.addNote(req.params.reciever_id, req.body.content, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.redirect(`/notes/${req.params.reciever_id}`);
    }
  });
};
