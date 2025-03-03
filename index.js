function addingEventListener() {
    // Select the button element
    const button = document.getElementById('button');

    // Add an event listener for "click"
    button.addEventListener("click", function() {
        alert("Button was clicked!");
    });
}
