const fs = require('fs');
const path = require('path');

// add a note
function addNote(newNote, notesArr) {
    notesArr.push(newNote);
    updateNotes(notesArr);

    return notesArr;
}

// delete a note
function deleteNote(id, notesArr) {
    notesArr.splice(notesArr.findIndex(note => note.id == id), 1);
    updateNotes(notesArr);

    return notesArr;
}

// updates db.json
function updateNotes(notesArr) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );
}

module.exports = { addNote, deleteNote };