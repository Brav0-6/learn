// script.js

function toggleProfilePage() {
    var profilePage = document.getElementById("profilePage");
    if (profilePage.style.display === "none" || profilePage.style.display === "") {
        profilePage.style.display = "block";
    } else {
        profilePage.style.display = "none";
    }
}

function logout() {
    alert("Logging out...");
    // Add logout functionality here
}

function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
function redirectToRegister() {
    window.location.href = 'register.html'; // Change this to your registration page URL
}