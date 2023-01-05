let mobiles = ["nokia", "samsung", "lg", "apple", "oneplus", "huawei", "asus", "htc"];

document.getElementById("mobiles1").innerHTML = "<li>" + mobiles[0] + "</li>";
document.getElementById("mobiles1").innerHTML += "<li>" + mobiles[1] + "</li>";
document.getElementById("mobiles1").innerHTML += "<li>" + mobiles[2] + "</li>";
document.getElementById("mobiles1").innerHTML += "<li>" + mobiles[3] + "</li>";
document.getElementById("mobiles1").innerHTML += "<li>" + mobiles[4] + "</li>";
document.getElementById("mobiles1").innerHTML += "<li>" + mobiles[5] + "</li>";
document.getElementById("mobiles1").innerHTML += "<li>" + mobiles[6] + "</li>";
document.getElementById("mobiles1").innerHTML += "<li>" + mobiles[7] + "</li>";


for (let i = 0; i < mobiles.length; i++) {
    document.getElementById("mobiles2").innerHTML += "<li>" + mobiles[i] + "</li>"; 
}

for (let i = 1; i < 51; i++) {
    document.getElementById("counter1").innerHTML += "<li>" + [i] + "</li>";
}

for (let i = 0; i < 50; i++) {
    document.getElementById("counter2").innerHTML += "<li>" + [i] + "</li>";
}


