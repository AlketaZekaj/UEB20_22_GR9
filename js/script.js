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
        // send login request to server
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

function btnMouseEnterEvent() {
    console.warn("We're directing you to the booking page!");
}

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (e) => {
    alert("Thank you for choosing us!");
})


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
