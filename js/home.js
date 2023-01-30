//krijimi i objekteve
function Udhëtimi(destination, startDate, endDate) {
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
}

// Krijimi i një instance të objektit Udhëtimi
let udhetimi1 = new Udhëtimi("Paris", "01/01/2023", "01/05/2023");

let udhetimi2 = new Udhëtimi("Roma", "06/02/2023", "06/05/2023");

let udhetimi3 = new Udhëtimi("Barcelona", "03/23/2023", "03/27/2023");

let udhetimi4 = new Udhëtimi("London", "04/12/2023", "04/18/2023");

let udhetimi5 = new Udhëtimi("Maldives", "05/15/2023", "05/20/2023");


document.getElementById("destinacioni").innerHTML = udhetimi1.destination;
document.getElementById("data-fillimit").innerHTML = udhetimi1.startDate;
document.getElementById("data-mbarimit").innerHTML = udhetimi1.endDate;

document.getElementById("destinacioni1").innerHTML = udhetimi2.destination;
document.getElementById("data-fillimit1").innerHTML = udhetimi2.startDate;
document.getElementById("data-mbarimit1").innerHTML = udhetimi2.endDate;

document.getElementById("destinacioni2").innerHTML = udhetimi3.destination;
document.getElementById("data-fillimit2").innerHTML = udhetimi3.startDate;
document.getElementById("data-mbarimit2").innerHTML = udhetimi3.endDate;

document.getElementById("destinacioni3").innerHTML = udhetimi4.destination;
document.getElementById("data-fillimit3").innerHTML = udhetimi4.startDate;
document.getElementById("data-mbarimit3").innerHTML = udhetimi4.endDate;

document.getElementById("destinacioni4").innerHTML = udhetimi5.destination;
document.getElementById("data-fillimit4").innerHTML = udhetimi5.startDate;
document.getElementById("data-mbarimit4").innerHTML = udhetimi5.endDate;


// Datë e dëshiruar e përdoruesit
var dataDeshiruar = new Date("01/01/2023");

// Kontrollimi i disponueshmërisë së udhëtimit
if (dataDeshiruar >= new Date(udhetimi1.startDate) && dataDeshiruar <= new Date(udhetimi1.endDate)) {
    console.log("Udhëtimi në Paris është i disponueshëm në datën e dëshiruar të përdoruesit.");
} else {
    console.log("Udhëtimi në Paris nuk është i disponueshëm në datën e dëshiruar të përdoruesit.");
}

//

// Define an array of travel objects
var udhetimet = [
    { destination: "Paris", startDate: "01/01/2023", endDate: "01/05/2023", price: 1000 },
    { destination: "Rome", startDate: "06/02/2023", endDate: "06/05/2023", price: 1200 },
    { destination: "Barcelona", startDate: "03/23/2023", endDate: "03/27/2023", price: 1100 }
];

function disponueshmeriaUdhetimit(udhetimi, callback) {
    var dataDeshiruar = new Date("06/02/2023");
    return callback(udhetimi, dataDeshiruar);
}

// Use the filter method to filter the available travels
var udhetimetDisponueshme = udhetimet.filter(udhetim => {
    return disponueshmeriaUdhetimit(udhetim, (udhetim, data) => {
        var start = new Date(udhetim.startDate);
        var end = new Date(udhetim.endDate);
        return data >= start && data <= end;
    });
});

console.log(udhetimetDisponueshme);
