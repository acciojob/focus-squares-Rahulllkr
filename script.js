//your JS code here. If required.
const square1 = document.getElementById("square1")
const square2 = document.getElementById("square2")
const square3 = document.getElementById("square3")


const lavender = "#E6E6FA"
const coffee = "#6F4E37"

function setSquareColor(s1,s2,s3) {
	s1.style.background = "lavender"
	s2.style.background = "coffee"
	s3.style.background = "coffee"
	
}

square1.addEventListener("mouseover", () => {
  setSquaresColor(square1, square2, square3);
});
square1.addEventListener("mouseout", () => {
  resetColors();
});

square2.addEventListener("mouseover", () => {
  setSquaresColor(square2, square1, square3);
});
square2.addEventListener("mouseout", () => {
  resetColors();
});

square3.addEventListener("mouseover", () => {
  setSquaresColor(square3, square1, square2);
});
square3.addEventListener("mouseout", () => {
  resetColors();
});

function resetColors() {
  square1.style.backgroundColor = lavender;
  square2.style.backgroundColor = lavender;
  square3.style.backgroundColor = lavender;
}