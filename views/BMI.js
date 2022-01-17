const age = document.querySelector("#age");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const button = document.querySelector("button");
const result = document.querySelector("#result");



button.addEventListener("click", ()=>{
	result.textContent = weight/(height)*(height);
	result.style.color = "#e0f2d8";
});