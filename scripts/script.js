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

// Getypt door Sanne: GameCube buttons
var GameCubeButtonA = document.querySelector(".GameCube .a-button");
var GameCubeButtonY = document.querySelector(".GameCube .y-button");

var televisie2001 = document.querySelector(".televisie2001");

GameCubeButtonY.addEventListener("click", informatieHier);
GameCubeButtonA.addEventListener("click", gameplayHier);

function informatieHier() {
	televisie2001.classList.add("toonInfo");
}

function gameplayHier() {
	televisie2001.classList.remove("toonInfo");
}

// Nintendo DS
var DSButtonA = document.querySelector(".DS .ds-a-button");
var DSButtonB = document.querySelector(".DS .ds-b-button");

var dsOnder = document.querySelector(".ds-onder");

DSButtonA.addEventListener("click", gameplayDS);
DSButtonB.addEventListener("click", informatieDS);

function informatieDS() {
	dsOnder.classList.add("informatieDS");
}

function gameplayDS() {
	dsOnder.classList.remove("informatieDS");
}