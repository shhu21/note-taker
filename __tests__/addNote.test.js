const { addNote } = require('../lib/notes');
const notes = require('../db/db.json');
jest.mock('fs');

// pass
test("adds a new note to the database (pass)", () => {
  const newNote = {
    "title": "Note 1",
    "text": "new note 1",
    "id": "0"
  };

  addNote(newNote, notes);

  expect(notes.find(note => note.id == newNote.id)).toBe(newNote);
});

// fail
test("adds a new note to the database (fail)", () => {
  const newNote = {
    "title": "Note 1",
    "text": "new note 1",
    "id": "0",
    "anotherKey": "key"
  };

  expect(addNote(newNote, notes)).toEqual({
      "error": {
      "code": 400,
      "message": "Invalid object input."
    }
  });
});