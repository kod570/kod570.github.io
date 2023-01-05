const htmlbasket = document.getElementById("basket");

let basket = ["tv", "mobile", "ps4", "ps3"];

showlist();

function showlist(){
    htmlbasket.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        htmlbasket.innerHTML += "<li>" + basket[i] + "</li>";
    }
}

function addToList() {
    const input = document.getElementById("addtolist").value;
    basket.push(input);
    showlist();
}

function removefromlist() {
    const input = document.getElementById("remove").value;
    for (let i = 0; i < basket.length; i++) {
        if (input === basket[i]){
            basket.splice(i, 1);
        }
    }
    showlist();
}