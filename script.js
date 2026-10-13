
function showService(serviceName) {
    alert("You selected " + serviceName + ".");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let userMessage = document.getElementById("userMessage").value.trim();
    let messageBox = document.getElementById("message");

    if (name === "" || email === "" || userMessage === "") {
        alert("Please fill in all the fields.");
        return;
    }

    messageBox.textContent = "Thank you, " + name + "! Your message has been submitted.";
    messageBox.classList.remove("d-none");

    document.getElementById("contactForm").reset();
});
