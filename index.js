function sayYes() {
    alert('<3');
}

function init() {
    let a = document.getElementById("No");
    document.getElementById("container").style.position = "relative";
    a.style.position = "absolute";
}

let a = document.getElementById("No");
let h = window.innerHeight;
let w = window.innerWidth;

function sayNo() {
    a.style.left = Math.random() * w + "px";
    a.style.top = Math.random() * h + "px";
}

window.onload = init();
