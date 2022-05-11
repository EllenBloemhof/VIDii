// JavaScript Document
console.log("Howdy!");

// buttons in de detail sections
const buttonGameCubeClose = document.querySelector("section.GameCube button");
const buttonDSClose = document.querySelector("section.DS button");
const buttonWiiClose = document.querySelector("section.Wii button");
const buttonSwitchClose = document.querySelector("section.Switch button");

buttonGameCubeClose.addEventListener("click", goFromGameCubeToButtons);
buttonDSClose.addEventListener("click", goFromDSToButtons);
buttonWiiClose.addEventListener("click", goFromWiiToButtons);
buttonSwitchClose.addEventListener("click", goFromSwitchToButtons);

function goFromGameCubeToButtons() {
	document.body.classList.remove("GameCube");
}

function goFromDSToButtons() {
	document.body.classList.remove("DS");
}

function goFromWiiToButtons() {
	document.body.classList.remove("Wii");
}

function goFromSwitchToButtons() {
	document.body.classList.remove("Switch");
}

// buttons in button section
const buttonGameCube = document.querySelector("section.buttons ol li:nth-of-type(1) button");
const buttonDS = document.querySelector("section.buttons ol li:nth-of-type(2) button");
const buttonWii = document.querySelector("section.buttons ol li:nth-of-type(3) button");
const buttonSwitch = document.querySelector("section.buttons ol li:nth-of-type(4) button");


buttonGameCube.addEventListener("click", gotoGameCube);
buttonDS.addEventListener("click", gotoGameDS);
buttonWii.addEventListener("click", gotoGameWii);
buttonSwitch.addEventListener("click", gotoGameSwitch);


function gotoGameCube() {
	document.body.classList.add("GameCube");
}

function gotoGameDS() {
	document.body.classList.add("DS");
}

function gotoGameWii() {
	document.body.classList.add("Wii");
}

function gotoGameSwitch() {
	document.body.classList.add("Switch");
}