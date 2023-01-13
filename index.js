const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", () => {
  const randomNumber = randomColor();
  color.innerHTML = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});
