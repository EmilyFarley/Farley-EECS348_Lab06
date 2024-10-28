function validatePasswords() {
    var password1 = document.getElementById("password1").value;

    var password2 = document.getElementById("password2").value;

    if (password1.length < 8) {
        alert("First password is less than 8 letters!")
    }
    else if (password2.length < 8) {
        alert("Second password is less than 8 letters!")
    }
    else if (password1 != password2) {
        alert("The passwords do not match!")
    }
    else {
        alert("Passwords validated!")
    }
}
