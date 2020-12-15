let MY_NOTE='_my_note';
let my_notes=localStorage.getItem(MY_NOTE)?JSON.parse(localStorage.getItem(MY_NOTE)):[];
window.onload


function saveNotes() {
  let newNotes = document.getElementById("notesEntry").value;
  let notes={};
  notes.value=newNotes;
  notes.date=new Date();
  notes.id=new Date().getTime();
  my_notes.push(notes);
  localStorage.setItem(MY_NOTE,JSON.stringify(my_notes));
  document.getElementById("notesEntry").value='';
  getSavedNotes();
}

function getSavedNotes(){
    let my_notes_html='';
    
}