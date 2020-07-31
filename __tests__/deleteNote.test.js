const fs = require("fs");
const path = require('path');
const { addNote, deleteNote } = require('../lib/notes');
const notes = require('../db/db.json');
jest.mock('fs');

// pass
test("deletes a note from the database (pass)", () => {
    const newNote = {
      "title": "Note 1",
      "text": "new note 1",
      "id": "0"
    };
  
    addNote(newNote, notes);
    deleteNote(newNote.id, notes);
  
    expect(notes.findIndex(note => note.id == newNote.id)).toBe(-1);
  });
  
  // fail
  test("deletes a note from the database (fail)", () => {
    const newNote = {
      "title": "Note 2",
      "text": "new note 2",
      "id": "1"
    };
  
    addNote(newNote, notes);
  
    expect(deleteNote("invalid id", notes)).toEqual({
        "error": {
          "code": 404,
          "message": "Object not found."
        }
    });
  });