let house = "villa";

let housedetails = {
    firstroom: "bathroom",
    secondroom: "kitchen",
    thirdroom: "bedroom",
    getallhousedetails: function(){
        return "firstroom " + this.firstroom + " secondroom " + this.secondroom +
        " thirdroom " + this.thirdroom;
    }
}

document.getElementById("house").innerHTML = housedetails.getallhousedetails();

let tv = "samsung";

let tvdetails = {
    type: "LED",
    size: "32 tommer",
    tuner: "ja",
    getalltvdetails: function(){
        return "type " + this.type + " størrelse " + this.size +
        " tuner " + this.tuner;
    }
}

document.getElementById("tv").innerHTML = tvdetails.getalltvdetails();


let mobile = "nokia";

let mobiledetails = {
    type: "Nokia G50",
    screensize: "6.82 inch",
    batterysize: "5000 mAh",
    getallmobiledetails: function(){
        return "type " + this.type + " skærmstørelse " + this.screensize +
        " batterysize " + this.batterysize;
    }
}

document.getElementById("mobile").innerHTML = mobiledetails.getallmobiledetails();