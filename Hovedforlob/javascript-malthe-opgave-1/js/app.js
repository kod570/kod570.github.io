let text = "hej";

console.log(text);

function replacetext(){
    text = "log";
    console.log(text);
}

replacetext();


let change = document.getElementById("changeme");

function changeme(){
    change.innerHTML = "I trykkede på knappen";
}


let numberone = 4;
let numbertow = 5;
function multiplikation(){  
    document.write(numberone + numbertow);
}

multiplikation();