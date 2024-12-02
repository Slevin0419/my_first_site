function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === "flex" || element.style.display === "block") ? "none" : "block";
    }
}

function replaceH1Text() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("utm_term");
    const h1 = document.querySelector("h1");
    if (searchTerm && h1) {
        h1.textContent = searchTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

document.addEventListener("DOMContentLoaded", function() {
    showMessage("Скрипт загружен!");
    logCurrentTime();
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility(".myname");
    replaceH1Text();
});
