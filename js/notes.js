const noteForm = document.querySelector('#note-form');
const noteText = document.querySelector('#note-text');
const notesContainer = document.querySelector('#notes-container');

let notes = [];

function addNote() {
  const text = noteText.value.trim();

  if (text !== '') {
    const note = {
      id: Date.now(),
      text: text
    };

    notes.push(note);
    saveNotes();
    renderNotes();

    noteText.value = '';
  }
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  saveNotes();
  renderNotes();
}

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
  const notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    notes = JSON.parse(notesJSON);
  }
}

function renderNotes() {
  notesContainer.innerHTML = '';

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    const noteTitle = document.createElement('h2');
    noteTitle.textContent = `Note ${i + 1}`;

    const noteText = document.createElement('p');
    noteText.textContent = note.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteNote(note.id));

    noteCard.appendChild(noteTitle);
    noteCard.appendChild(noteText);
    noteCard.appendChild(deleteButton);

    notesContainer.appendChild(noteCard);
  }
}

noteForm.addEventListener('submit', event => {
  event.preventDefault();
  addNote();
});

loadNotes();
renderNotes();
