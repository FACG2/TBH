const notesQueries = require('queries/notes.js');

module.exports = {
  getNotesByUserId: notesQueries.getNotes
};
