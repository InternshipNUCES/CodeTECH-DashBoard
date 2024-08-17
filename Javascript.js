
function genPassword(length, includeLower, includeUpper, includeNumber) {

    const Lower = "abcdefghijklmnopqrstuvwxyz";
    const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Nums = "0123456789";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLower ? Lower : "";
    allowedChars += includeUpper ? Upper : "";
    allowedChars += includeNumber ? Nums : "";


    if (length <= 0) {
        return `Please Enter some length`;
    }
    if (length > 500) {
        return `Your length is too big for browser`;
    }
    if (allowedChars.length == 0) {
        return `Please Select any choice`;
    }

    for (let i = 0; i < length; i++) {
        let x = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[x];

    }

    return password;

}

const len = document.getElementById("len");
const includeUpper = document.getElementById("C1");
const includeLower = document.getElementById("C2");
const includeNumber = document.getElementById("C3");
const generatedpass = document.getElementById("generatedpass");


let password;


document.getElementById("sub").onclick = function () {

    let a = false;
    let b = false;
    let c = false;

    if (includeUpper.checked) {
        a = true;
    }
    if (includeLower.checked) {
        b = true;
    }
    if (includeNumber.checked) {
        c = true;
    }

    let length = len.value;
    password = genPassword(length, b, a, c);
    generatedpass.textContent = password;


}




