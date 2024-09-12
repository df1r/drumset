
var crash = [];
var kick = [];
var snare = [];
var tom1 = [];
var tom2 = [];
var tom3 = [];
var tom4 = [];
var soundArrayLength = 30;
for ( var j=1; j<=soundArrayLength; j++ ){
    crash.push( new Audio("./sounds/crash.mp3"));
    kick.push( new Audio("./sounds/kick-bass.mp3"));
    snare.push( new Audio("./sounds/snare.mp3"));
    tom1.push( new Audio("./sounds/tom-1.mp3"));
    tom2.push( new Audio("./sounds/tom-2.mp3"));
    tom3.push( new Audio("./sounds/tom-3.mp3"));
    tom4.push( new Audio("./sounds/tom-4.mp3"));
}

var soundNumber = 0;


for (var j=0; j<document.querySelectorAll(".drum").length; j++) {
    document.querySelectorAll("button")[j].addEventListener("click", onClick); //Why is it "button" instead of ".drum"? Do parens matter after onClick?
}

document.addEventListener("keydown",onPress); //Same question for onPress and parens. onPress uses the event, but onClick uses 'this'.

function onClick() {//addEventListener adds a method to the button object, called "onClick".
    makeSound(this.innerHTML); //'this' only refers to the object that 'onClick' is a method of. It cannot be used within a function nested inside of onClick.
    buttonAnimation("."+this.innerHTML);
}

function onPress(e) {
    makeSound(e.key);//here 'this' would refer to the document instead of the button. But 'e' refers to the event itself, and the 'keydown' type of event has a record called 'key'.
}

function buttonAnimation(currButtonClass) {//Wait, can't I send the event instead of sending the key? Then I avoid having to query again. Is that better?
    document.querySelector(currButtonClass).classList.add("pressed");//'add' is not a method of every list. 'classList' is therefore special.
    setTimeout(function(){
        document.querySelector(currButtonClass).classList.remove("pressed");//If sending the event doesn't work, then next I will try storing the query result in a variable.
    }, 100);
}

function makeSound(keyLetter) {
    switch(keyLetter) {//instead of a switch statement on each press or click it would be more efficient to set up an array once and send 'makeSound' an index. Oh, but that might not eliminate the need for a switch each time.
        case "w":
            tom1[soundNumber].play();
            buttonAnimation("."+keyLetter);
            soundNumber = (soundNumber+1)%soundArrayLength;
            break;
        case "a":
            tom2[soundNumber].play();
            buttonAnimation("."+keyLetter);
            soundNumber = (soundNumber+1)%soundArrayLength;
            break;
        case "s":
            buttonAnimation("."+keyLetter);
            tom3[soundNumber].play();
            soundNumber = (soundNumber+1)%soundArrayLength;
            break;
        case "d":
            buttonAnimation("."+keyLetter);
            tom4[soundNumber].play();
            soundNumber = (soundNumber+1)%soundArrayLength;
        break;
        case "j":
            snare[soundNumber].play();
            buttonAnimation("."+keyLetter);
            soundNumber = (soundNumber+1)%soundArrayLength;
            break;
        case "k":
            crash[soundNumber].play();
            buttonAnimation("."+keyLetter);
            soundNumber = (soundNumber+1)%soundArrayLength;
            break;
        case "l":
            kick[soundNumber].play();
            buttonAnimation("."+keyLetter);
            soundNumber = (soundNumber+1)%soundArrayLength;
            break;
        default:
            console.log("Error: button shouldn't exist");
        break;
    }
}

/*function debugPlay() {
    var delayTime=100;
    setTimeout(function() {
        tom1.play();//console.log("1");
        setTimeout(function() {
            tom1a.play();//console.log("2");
            setTimeout(function() {
                tom1b.play();//console.log("3");
            },delayTime)
        },delayTime)
    }, delayTime);
}
*/