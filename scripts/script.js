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





// Getypt door Sanne: GAMECUBE BUTTONS
// Eerst roep je de variabele op; in dit geval in de GameCube de A- en Y-button
var GameCubeButtonA = document.querySelector(".GameCube .a-button");
var GameCubeButtonY = document.querySelector(".GameCube .y-button");

// Vervolgens het onderdeel waarin de aanpassing gemaakt moet worden
var televisie2001 = document.querySelector(".televisie2001");

// Je maakt een EventListener aan om de functie te maken, in dit geval: als de gebruiker klikt dan moet deze functie worden uitgevoerd
GameCubeButtonY.addEventListener("click", informatieHier);
GameCubeButtonA.addEventListener("click", gameplayHier);

// Hiermee maak je de functie werkend
function informatieHier() {
	televisie2001.classList.add("toonInfo");
}

function gameplayHier() {
	televisie2001.classList.remove("toonInfo");
}






// NINTENDO DS:
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





// NINTENDO WII: gebaseerd op: https://codepen.io/ellenbloemhof/pen/poaEgxG
var deButton = document.querySelector(".Wii .wii-buttons button");

var informatieWii = document.querySelector(".wii-info");

deButton.addEventListener("click", gameplayWii);

function gameplayWii() {
	informatieWii.classList.toggle("informatieWii");
	console.log("jij werkt niet");
}





// NINTENDO SWITCH: 
var SwitchButtonA = document.querySelector(".Switch .switch-a");
var SwitchButtonB = document.querySelector(".Switch .switch-b");

var schermSwitch = document.querySelector(".switch-info");

SwitchButtonA.addEventListener("click", gameplaySwitch);
SwitchButtonB.addEventListener("click", informatieSwitch);

function informatieSwitch() {
	schermSwitch.classList.add("informatieSW");
	console.log("test i guess")
}

function gameplaySwitch() {
	schermSwitch.classList.remove("informatieSW");
}





// START SCHERM: credits naar Mirte en kudo credits naar Sanne

// Eerst roep je de variabele op; in dit geval de aside en de button daarin
var startScherm = document.querySelector("aside");
var startButton = document.querySelector("aside button");

// Je maakt een EventListener aan om de functie te maken, in dit geval: als de gebruiker klikt dan moet deze functie worden uitgevoerd
// Als de gebruiker hierop klikt dan verdwijnt het startscherm
startButton.addEventListener ('click', starten);

// Hiermee maak je de functie werkend
function starten() {
	startScherm.classList.add("gestart");
}
