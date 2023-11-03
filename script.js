const button = document.getElementById("Button");
const colors = ["yellow", "green", "red"];
let clicks = 0;

button.addEventListener("click", function Onclick() {
    button.style.backgroundColor = colors[clicks];
    clicks = (clicks + 1) % colors.length;
})

function colorChange() {
    button.style.backgroundColor = colors[clicks];
    clicks = (clicks + 1) % colors.length;
}

setInterval(colorChange, 10000);
