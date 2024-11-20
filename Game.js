
let selectedImage = null;//to store the selected image

function selectImage(imageId) {
    selectedImage = imageId;
    document.getElementById("message").textContent = "";

//This JavaScript code retrieves an HTML element from the Document Object Model (DOM) by its unique `id` attribute.In other words, it finds an element in the HTML document with the id "message" (e.g. <div id="message">) and removes any text that is currently displayed within that element, effectively clearing its contents.
}

function checkMatch(fruitName) {
    if (selectedImage) {
        if (selectedImage === fruitName) {
            document.getElementById("message").textContent = "Correct!";
        } else {
            document.getElementById("message").textContent = "Wrong dude..";
        }
    } else {
        document.getElementById("message").textContent = "Please select an image first.";
    }
}

