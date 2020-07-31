# Note Taker

# URL
*URL: https://shhu-note-taker.herokuapp.com*

# Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [User's Guide](#users-guide)
* [Testing](#testing)


# Description
An html page that allows the user to create and store notes.

# Installation
1. Clone the repository.
2. Run `npm install` in the command line to install the dependancies.
3. Run `npm start` in the command line to start the program.

# User's Guide
Navigate to the landing page by clicking on the [URL](#url) link, then click the *Get Started* button.

1. Create a New Note </br>
Click on the new note button (*pencil* icon) at the top right corner of the page to start a new note.  Fill in the note title and note text fields, then click the save button (next to the new note button).

2. View a Note </br>
Select the desired note from the list. (Note: notes are read only and may not be edited.)

3. Delete a Note </br>
Click the delete button (*trash can* icon) next to the note you wish to be deleted.

# Testing
Testing may be executed by following the [Installation](#installation) and then running `npm run test` to run all tests.  All test files can be found in the `./__tests__` directory.  (*Note: Testing is done through the Jest framework*)
