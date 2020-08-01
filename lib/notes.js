const fs = require('fs');
const path = require('path');

// add a note
function addNote(newNote, notesArr) {
    notesArr.push(newNote);

    if(!notesArr.every(note => note.title && note.text && note.id && (Object.keys(note).length == 3))) {
        return {
            "error": {
              "code": 400,
              "message": "Invalid object input."
            }
        };
    }

    updateNotes(notesArr);
    return notesArr;
}

// delete a note
function deleteNote(id, notesArr) {
    const index = notesArr.findIndex(note => note.id == id);
    if(index == -1) {
        return {
            "error": {
              "code": 404,
              "message": "Object not found."
            }
        };
    }
    notesArr.splice(index, 1);
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