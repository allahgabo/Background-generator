var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gredient");

function GradientColor(){
	body.style.background="linear-gradient(to right ," 
	+color1.value 
	+ ", "
	+color2.value 
	+")";
	// to see css gradint 
	css.textContent=body.style.background+";";
}
// we do need to call the function ()
color1.addEventListener("input",GradientColor)

color2.addEventListener("input",GradientColor)