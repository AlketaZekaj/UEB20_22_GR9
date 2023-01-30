function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailR = document.getElementById("emailR").value;
    var passwordR = document.getElementById("passwordR").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var checkbox = document.getElementById("checkbox").checked;

    if (firstName == "" || lastName == "" || emailR == "" || passwordR == "" || confirmPassword == "") {
        document.getElementById("danger").style.display = "block";
        return false;
    }
    else if (passwordR.length < 8) {
        document.getElementById("danger").style.display = "block";
        document.getElementById("danger").innerHTML = "Password must be at least 8 characters long!";
        return false;
    }
    else if (passwordR != confirmPassword) {
        document.getElementById("danger").style.display = "block";
        document.getElementById("danger").innerHTML = "Password and Confirm Password must match!";
        return false;
    }
    else if (!checkbox) {
        document.getElementById("danger").style.display = "block";
        document.getElementById("danger").innerHTML = "Please agree to our Terms and Privacy Policy.";
        return false;
    }
    else {
        alert("Your registration has been successfully completed!");
        return true;
    }
}

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
        document.getElementById("registerForm").submit();
    }
});