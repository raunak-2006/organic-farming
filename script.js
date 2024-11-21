
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var messageElement = document.getElementById("form-message");

    if (name === "" || email === "") {
        messageElement.textContent = "Please fill out all fields.";
        messageElement.style.color = "red";
        return false;
    } else {
        messageElement.textContent = "Thank you for contacting us, " + name + "!";
        messageElement.style.color = "green";
        return false; 
    }
}

