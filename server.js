const express = require('express');
const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

function updateNotes(notesArr) {
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );
}

function addNote(newNote, notesArr) {
    notesArr.push(newNote);
    updateNotes(notesArr);
}

// ROUTES
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// TODO: not linking
app.get('/api/notes', (req, res) => {
    console.log('notes')
});

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    addNote(req.body, notes);
});

// TODO: not tested
app.delete('/api/notes/:id', (req, res) => {
    let newNotesArr = notes;
    for(let i = 0; i < newNotesArr.length; i++) {
        if(newNotesArr[i].id == req.params.id) {
            newNotesArr.splice(i, 0);
            updateNotes(newNotesArr);
            break;
        }
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});