
var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");

for (var j=0; j<document.querySelectorAll(".drum").length; j++) {
    document.querySelectorAll("button")[j].addEventListener("click", onClick);
}

document.addEventListener("keydown",onPress);

function onPress(e) {
    makeSound(e.key);
}

function onClick() {
    makeSound(this.innerHTML);
}

function makeSound(keyLetter) {
    switch(keyLetter) {
        case "w":
            tom1.play();
        break;
        case "a":
            tom2.play();
        break;
        case "s":
            tom3.play();
        break;
        case "d":
            tom4.play();
        break;
        case "j":
            snare.play();
        break;
        case "k":
            crash.play();
        break;
        case "l":
            kick.play();
        break;
        default:
            console.log("Error: button shouldn't exist");
        break;
    }
}
