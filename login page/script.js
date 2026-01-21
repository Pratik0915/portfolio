const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    let isValid = true;

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, "Enter a valid email");
        isValid = false;
    } else {
        showSuccess(email);
    }

    if (password.value.trim() === "") {
        showError(password, "Password is required");
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        showSuccess(password);
    }

    if (isValid) {
        alert("Login successful (demo)");
        form.reset();
    }
}

function showError(input, message) {
    const small = input.parentElement.querySelector(".error");
    small.innerText = message;
    input.style.borderColor = "red";
}

function showSuccess(input) {
    const small = input.parentElement.querySelector(".error");
    small.innerText = "";
    input.style.borderColor = "green";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
