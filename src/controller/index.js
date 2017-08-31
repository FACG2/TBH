const express = require('express');
const router = express.Router();

const notes = require('./notes');
const users = require('./users');
const error = require('./error');


router.get('/notes/:userId', notes.notes);
router.get('/users/:reciever_Id/addNote', notes.addNote);
router.post('/users/:reciever_id/addNote', notes.submitAddNote);
router.get(['/home','/'] ,users.home);



router.use(error.client);
router.use(error.server);

module.exports = router;
