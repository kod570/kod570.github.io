const sodabrands = [
    {
        name: "Fanta orange",
        color: "Orange",
        taste: "Appelsin",
        sukker: "Yes",
        nosugar: "No"
    },
    {
        name: "Fanta orange no sugar",
        color: "Orange",
        taste: "Appelsin",
        sukker: "Yes",
        nosugar: "No"
    },
    {
        name: "Carlsberg sport",
        color: "Green",
        taste: "Sport",
        sukker: "Yes",
        nosugar: "No"
    },
    {
        name: "Tuborg Squash",
        color: "Orange",
        taste: "Appelsin",
        sukker: "Yes",
        nosugar: "No"
    }
]

for (let i = 0; i < sodabrands.length; i++) {
    document.getElementById("sodavand").innerHTML += "<li id=item-1>" + "Navn" + " " + sodabrands[i].name + "</li>" 
    + "<li id=item-2>" + "Farve" + " " + sodabrands[i].color + "</li>"
    + "<li id=item-3>" + "Smag" + " " + sodabrands[i].taste + "</li>"
    + "<li id=item-4>" + "Sukker" + " " + sodabrands[i].sukker + "</li>"
    + "<li id=item-5>" + "Ingen sukker" + " " + sodabrands[i].nosugar + "</li>"  
}


const htmlbasket = document.getElementById("basket");

let basket = ["tv", "mobile", "ps4", "ps3"];

showlist();

function showlist(){
    htmlbasket.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        htmlbasket.innerHTML += "<li id=basket1>" + basket[i] + "</li>";
    }
}

function validateForm() {
    const input = document.forms["Form"]["first"].value;
    const input1 = document.forms["Form"]["secound"].value;
    const input2 = document.forms["Form"]["thrid"].value;
    const input3 = document.forms["Form"]["fourth"].value;
    if (input == null || input == "", input1 == null || input1 == "", input2 == null || input2 == "", input3 == null || input3 == "") {
      alert("Please Fill All Required Field");
      return false;
    }
    else {
    const input = document.getElementById("addtolist").value;
    const input1 = document.getElementById("addtolist1").value;
    const input2 = document.getElementById("addtolist2").value;
    const input3 = document.getElementById("addtolist3").value;
    basket.push(input);
    basket.push(input1);
    basket.push(input2);
    basket.push(input3);
    showlist();
    }
}

function removefromlist() {
    const input = document.getElementById("remove").value;
    for (let i = 0; i < sodavand.length; i++) {
        if (input === sodavand[i]){
            sodavand.splice(i, 1);
        }
    }
    showlist();
}




