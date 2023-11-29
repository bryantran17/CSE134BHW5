document.addEventListener("DOMContentLoaded", function () {
    var jsDependentElement = document.getElementById("theme_switch");

    // Remove the "display: none" style to make the element visible
    jsDependentElement.style.display = "block";
});

// Function to set the stylesheet based on the user's preference
function setStylesheet() {
    var isStyle1 = localStorage.getItem("isStyle1");

    if (isStyle1 === null) {
        // If no preference is stored, use a default value
        isStyle1 = true;
    } else {
        isStyle1 = JSON.parse(isStyle1); // Convert to boolean
    }

    var stylesheet = document.getElementById("stylesheet");

    if (isStyle1) {
        stylesheet.href = "main.css";
    } else {
        stylesheet.href = "dark.css";
    }
}

// Function to toggle the stylesheet and update localStorage
function toggleStylesheet() {
    var isStyle1 = localStorage.getItem("isStyle1");

    if (isStyle1 === null) {
        // If no preference is stored, use a default value
        isStyle1 = true;
    } else {
        isStyle1 = JSON.parse(isStyle1); // Convert to boolean
    }

    var stylesheet = document.getElementById("stylesheet");

    // Update the stylesheet immediately
    if (isStyle1) {
        stylesheet.href = "dark.css";
    } else {
        stylesheet.href = "main.css";
    }

    // Toggle the preference
    isStyle1 = !isStyle1;

    // Update localStorage after the change
    localStorage.setItem("isStyle1", JSON.stringify(isStyle1));
}


// Call setStylesheet when the page loads
window.onload = setStylesheet;
