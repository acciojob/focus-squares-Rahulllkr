//your JS code here. If required.
const square1 = document.getElementById("square1")
const square2 = document.getElementById("square2")
const square3 = document.getElementById("square3")

square1.addEventListener("mouseover", () => {
	if(square1.style.background == "#E6E6FA"){
		square2.style.background = "#6F4E37"
		square3.style.background = "#6F4E37"
	}
})

square2.addEventListener("mouseover", () => {
	if(square2.style.background == "#E6E6FA"){
		square1.style.background = "#6F4E37"
		square3.style.background = "#6F4E37"
	}
})

square3.addEventListener("mouseover", () => {
	if(square3.style.background == "#E6E6FA"){
		square1.style.background = "#6F4E37"
		square2.style.background = "#6F4E37"
	}
})