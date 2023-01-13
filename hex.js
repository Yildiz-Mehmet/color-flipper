const hex = ["A", "B", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
const h2 = document.getElementById("h2");

function randomHex() {
  return Math.floor(Math.random() * hex.length);
}
btn.addEventListener("click", () => {
  color.innerHTML = "#";
  for (let i = 1; i <= 6; i++) {
    color.innerHTML += hex[randomHex()];
    document.body.style.backgroundColor = color.innerHTML;
    btn.style.backgroundColor = color.innerHTML;
    color.style.color = color.innerHTML;
  }
});
