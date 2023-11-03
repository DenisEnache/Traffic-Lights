const button = document.getElementById("Button");
const colors = ["yellow", "green", "red"];
let clicks = 0;

function changeColor() {
    button.style.backgroundColor = colors[clicks];
    clicks = (clicks + 1) % colors.length;
}

setInterval(changeColor, 10000);
