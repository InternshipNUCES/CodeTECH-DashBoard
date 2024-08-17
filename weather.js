const inputSubmit = document.getElementById("inputsubmit");
const inputSubmit2 = document.getElementById("inputsubmit2");
const dataArea = document.getElementById("dataArea");
const result = document.getElementById("place");

const key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","?","."];

const key2 = ["?", "C", "i", "k", "B", "M", "j", "l", "v", "y", "U", "x", "w", "H", "z", "I", "u", "S", "R", "m", "n", "p", ".", "V", "A", "J", "D","-", "o", "Y", "s", "r", "K", "L", "q", "t", "T", "h", "g", "Q", "W", "f", "G", "e", "F", "d", "P", "X", "c", "b", "E", "O", "a","Z","N"]




inputSubmit.onclick = function () {

    result.textContent = "";
    let word = dataArea.value;
    word = [...word];


    for (let things of word) {
        let a = key.indexOf(things);
        //console.log(a);
        let x1 = key[a];
        let x2 = key2[a];
        [x1] = [x2];
        result.textContent += x2;
    }
}

inputSubmit2.onclick = function () {

    result.textContent = "";
    let word = dataArea.value;
    word = [...word];


    for (let things of word) {
        let a = key2.indexOf(things);
        //console.log(a);
        let x1 = key2[a];
        let x2 = key[a];
        [x1] = [x2];
        result.textContent += x2;
    }
}

