
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var response = [];
var randomNumber;
var randomChosenColor;
var level=0;

var started = false;

$(document).keypress(function() {
    if (!started) {
        started = true;
      generate();
    
    }
  });


// function that generates the next color
function generate(){
level++;
var n = Math.random();
var randomNumber = Math.floor(n * 4);
randomChosenColor= buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
sound(randomChosenColor);                      //function for  sound called//
generationAnime();                             //function for animation when the number is generated//                
$('#level-title').html("level "+level)
}


// function for generation effect
function generationAnime(){
var haha ='#'+randomChosenColor;
console.log(haha);
$(haha).addClass("random");
setTimeout(function() {
document.querySelector(haha).classList.remove("random");}, 100);
}



//  SOUND
function sound(sup){
var audio = new Audio(sup + ".mp3");
audio.play();
}

// REsPONSE
for(var a =0; a<4 ;a++)
{        
    document.getElementsByClassName("btn")[a].addEventListener('click', function () {
        
        response.push(this.id);
        sound(this.id);                              //sound//           
        effect1(this.id);                           //pressing effect//
        console.log(response);

        for(var s=0; s<response.length;s++)
        {
             if(response[s]!=gamePattern[s])
             over();
        }
         if (response.length === gamePattern.length)
             check();

    });
}

// clicking animation
function effect1 (a)
{
    var hahas ='#'+a;
    $(hahas).addClass("random");
    setTimeout(function() {
    document.querySelector(hahas).classList.remove("random");}, 100);
}


//Function to check
function check() {
    if (check1() == 1) {
        response.length = 0;
        setTimeout(generate, 1000);
        
    }
}


// TRIAL
function check1() {
    for (var x = 0; x < gamePattern.length; x++) {
        if (response[x] != gamePattern[x])
            over();
        }
    return 1;
}


//OVER//
function over() {
    
    document.querySelector('body').classList.add("game-over");
    setTimeout(function() {
    document.querySelector('body').classList.remove("game-over");}, 100);
    let mySound = new Audio('wrong.mp3')
    mySound.play()
    $('#level-title').html("Game Over, Press Any Key to Restart" )
    startOver();

}

function startOver(){
    gamePattern.length=0;
    response.length=0;
    level=0;
    started = true;
}








