let display = document.querySelector("#display");
let btnreset = document.querySelector("#reset");
let btnresult = document.querySelector("#result");

let btnnumbers = document.querySelectorAll(".number");
let btnoperators = document.querySelectorAll(".operator");


for (let index = 0; index < btnnumbers.length; index++) {
    btnnumbers[index].addEventListener("click", (event) => {
        outputtodisplay(event.target.innerText);
    });
}

function outputtodisplay(output) {
    if (display.innerText === "0" && output != ".") {
        display.innerText = "";
    }
    display.innerText += output;
}