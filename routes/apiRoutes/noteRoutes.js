const router = require('express').Router();
const notes = require('../../db/db.json');
const { addNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    return res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    return res.send(addNote(req.body, notes));
});

router.delete('/notes/:id', (req, res) => {
    return res.send(deleteNote(req.params.id, notes));
});

module.exports = router;