// Mad Lib with JavaScript by David

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {


// Input
let schoolSubject = document.getElementById("school-subject").value;
let color = document.getElementById("color").value;
let noun = document.getElementById("noun").value;
// Process
let result = '"In ' + schoolSubject + " class, our teacher was wearing a " + color + ' ' + noun + '."'

// Output
document.getElementById("result").innerHTML = result;
}