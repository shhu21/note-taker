const fs = require('fs');
const path = require('path');

function addNote(newNote, notesArr) {
    notesArr.push(newNote);
    updateNotes(notesArr);
    return notesArr;
}

function deleteNote(id, notesArr) {
    for(let i = 0; i < notesArr.length; i++) {
        if(notesArr[i].id == id) {
            notesArr.splice(i, 1);
            updateNotes(notesArr);
            return notesArr;
        }
    }
}

function updateNotes(notesArr) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );
}

module.exports = { addNote, deleteNote };