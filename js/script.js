let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

//try,catch and throw function for login form
const form = document.getElementById("loginForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try {
        if (!email) {
            throw new Error("Email is required");
        }
        if (!password) {
            throw new Error("Password is required");
        }
        if (!validateEmail(email)) {
            throw new Error("Invalid email format");
        }
        if (password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
        form.submit();

    } catch (err) {
        alert(err);
    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//end


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
    var dataDeshiruar = new Date("01/01/2023");
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

//

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

//packages 
function btnMouseEnterEvent() {
    console.warn("We're directing you to the booking page!");
}

//contact
function message() {
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var PhoneNumber = document.getElementById('phoneNumber');
    var Message = document.getElementById('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (Name.value === '' || Email.value === '' || Message.value === '' || PhoneNumber.value === '') {
        danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Message.value = '';
            PhoneNumber.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}

//register
function validation() {
    var Name = document.getElementById('firstName');
    var Surname = document.getElementById('lastName');
    var Email = document.getElementById('email');
    var Password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var checkbox = document.getElementById('checkbox');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (Name.value === '' || Surname.value === '' || Email.value === '' || Password.value === '' || confirmPassword.value === '' || checkbox.checked == false) {
        danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            Name.value = '';
            Surname.value = '';
            Email.value = '';
            Password.value = '';
            confirmPassword.value = '';
            checkbox.checked = true;
        }, 1000);

        alert("Your registration has been succesfully completed!");
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}
