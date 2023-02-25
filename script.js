let musicNotes = document.getElementsByName("music-notes");
let musicIntervals = document.getElementsByName("music-intervals");
let musicOctaves = document.getElementsByName("music-octaves");
let noteOuput = document.getElementsByClassName("note-output")[0];

let notesArray = ["До", "Ре", "Мі", "Фа", "Соль", "Ля", "Сі"];
let tonesArray = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35];
let accidental = ["-дубль-бемоль ", "-бемоль ", " ", "-дієз ", "-дубль-дієз "];
let octaves = ["субконтр", "контр", "великої ", "малої ", "першої ", "другої ", "третьої ", "четвертої "];

let notesVar = 7;
let tonesVar = 12;
let octavesVar = 3;
let intervalsNotesVar = 0;
let intervalsTonesVar = 0;
let upDownVar = 1;
let notesSum = 0;
let tonesSum = 0;
let result = "";

function noteSelect(notesTonesVar) {
    notesVar = +notesTonesVar.split(" ")[0];
    tonesVar = +notesTonesVar.split(" ")[1];
    compute();
}

function intervalSelect(intervalsNotesTonesVar) {
    intervalsNotesVar = +intervalsNotesTonesVar.split(" ")[0];
    intervalsTonesVar = +intervalsNotesTonesVar.split(" ")[1];
    compute();
}

function octaveSelect(octave) {
    octavesVar = octave;
    compute();
}

function upDown(arg) {
    upDownVar = arg;
    compute();
}

function compute() {
    notesSum = notesVar + intervalsNotesVar * upDownVar;
    tonesSum = tonesVar + intervalsTonesVar * upDownVar;
    result = notesArray[notesSum % 7] + accidental[tonesSum - tonesArray[notesSum] + 2] + octaves[octavesVar + Math.floor(notesSum / 7)] + "октави";
    noteOuput.innerHTML = result;
}
