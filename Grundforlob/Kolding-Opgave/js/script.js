let shop1 = document.getElementById("shop1")
let shop2 = document.getElementById("shop2")
let shop3 = document.getElementById("shop3")
let shop4 = document.getElementById("shop4")
let shop5 = document.getElementById("shop5")
let shop6 = document.getElementById("shop6")
let shop7 = document.getElementById("shop7")
let shop8 = document.getElementById("shop8")
let sum = 0
function shopping1()
{
    document.getElementById("items").innerHTML = "Billeter x" + shop1.value + " :Pris pr stk: 100kr "
    sum = sum + shop1.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross1").style.display = "inline-block"
}
function shopping2()
{
    document.getElementById("items2").innerHTML = "Billeter x" + shop2.value + " :Pris pr stk: 100kr "
    sum = sum + shop2.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross2").style.display = "inline-block"
}
function shopping3()
{
    document.getElementById("items3").innerHTML = "Billeter x" + shop3.value + " :Pris pr stk: 100kr "
    sum = sum + shop3.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross3").style.display = "inline-block"
}
function shopping4()
{
    document.getElementById("items4").innerHTML = "Billeter x" + shop4.value + " :Pris pr stk: 100kr "
    sum = sum + shop4.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross4").style.display = "inline-block"
}
function shopping5()
{
    document.getElementById("items5").innerHTML = "Billeter x" + shop5.value + " :Pris pr stk: 100kr "
    sum = sum + shop5.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross5").style.display = "inline-block"
}
function shopping6()
{
    document.getElementById("items6").innerHTML = "Billeter x" + shop6.value + " :Pris pr stk: 100kr "
    sum = sum + shop6.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross6").style.display = "inline-block"
}
function shopping7()
{
    document.getElementById("items7").innerHTML = "Billeter x" + shop7.value + " :Pris pr stk: 100kr "
    sum = sum + shop7.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross7").style.display = "inline-block"
}
function shopping8()
{
    document.getElementById("items8").innerHTML = "Billeter x" + shop8.value + " :Pris pr stk: 100kr "
    sum = sum + shop8.value * 100;
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    document.getElementById("cross8").style.display = "inline-block"
}
function remove() {
    sum = sum - 100
    shop1.value = shop1.value - 1
    document.getElementById("items").innerHTML = "Billeter x" + shop1.value + " :Pris pr stk: 100kr "
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    if (shop1.value <= 0) {
        document.getElementById("cross1").style.display = "none";
        document.getElementById("items").innerHTML = ""
    }
}
function remove2() {
    sum = sum - 100
    shop2.value = shop2.value - 1
    document.getElementById("items2").innerHTML = "Billeter x" + shop2.value + " :Pris pr stk: 100kr "
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    if (shop2.value <= 0) {
        document.getElementById("cross2").style.display = "none";
        document.getElementById("items2").innerHTML = ""
    }
}
function remove3() {
    sum = sum - 100
    shop3.value = shop3.value - 1
    document.getElementById("items3").innerHTML = "Billeter x" + shop3.value + " :Pris pr stk: 100kr "
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    if (shop3.value <= 0) {
        document.getElementById("cross3").style.display = "none";
        document.getElementById("items3").innerHTML = ""
    }
}
function remove4() {
    sum = sum - 100
    shop4.value = shop4.value - 1
    document.getElementById("items4").innerHTML = "Billeter x" + shop4.value + " :Pris pr stk: 100kr "
    document.getElementById("sum").innerHTML = "I alt købt for: " + sum + "Kr"
    if (shop2.value <= 0) {
        document.getElementById("cross4").style.display = "none";
        document.getElementById("items4").innerHTML = ""
    }
}