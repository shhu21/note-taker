const express = require('express');
const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
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
    return notesArr;
}

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    console.log('notes')
    return res.json(notes);
});

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    return res.send(addNote(req.body, notes));
});

app.delete('/api/notes/:id', (req, res) => {
    let newNotesArr = notes;
    for(let i = 0; i < newNotesArr.length; i++) {
        if(newNotesArr[i].id == req.params.id) {
            newNotesArr.splice(i, 1);
            updateNotes(newNotesArr);
            return res.send(newNotesArr);
        }
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});