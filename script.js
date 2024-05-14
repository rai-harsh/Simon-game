// Generating the random color
var colors = [];
var response = [];

$("body").keydown(function (event){
    setTimeout(nextSequence, 1000);
        console.log(event.key);
    });



function nextSequence() {
    console.log("seq called");

    var n = Math.random();
    var randomNumber = Math.floor(n * 4);


    colors.push(randomNumber);
    
    console.log(colors);
    effect1(randomNumber);
}

function effect1 (a)
{

document.querySelectorAll('.btn')[a].classList.add("random");
setTimeout(function() {
document.querySelectorAll('.btn')[a].classList.remove("random");}, 100);
}

// Recording response   



document.querySelector("#green").addEventListener('click', function () {
    response.push(0);
    console.log( "respnse is "+response);
   for(var s=0; s<response.length;s++)
   {
        if(response[s]!=colors[s])
        over();
   }
    if (response.length === colors.length)
        check();
});


document.querySelector("#red").addEventListener('click', function () {
    response.push(1);
    console.log( "respnse is "+response);
    for(var s=0; s<response.length;s++)
    {
         if(response[s]!=colors[s])
         over();
    }
    if (response.length === colors.length)
        check();
});


document.querySelector("#yellow").addEventListener('click', function () {
    response.push(2);
    console.log( "respnse is "+response);
    for(var s=0; s<response.length;s++)
    {
         if(response[s]!=colors[s])
         over();
    }
    if (response.length === colors.length)
        check();
});


document.querySelector("#blue").addEventListener('click', function () {
    response.push(3);
    console.log( "respnse is "+response);
    for(var s=0; s<response.length;s++)
    {
         if(response[s]!=colors[s])
         over();
    }
    if (response.length === colors.length)
        check();
});




// Function to check
function check() {
    if (check1() == 1) {
        response.length = 0;
        setTimeout(nextSequence, 1000);
        
    }
}


// TRIAL
function check1() {
    for (var x = 0; x < colors.length; x++) {
        if (response[x] != colors[x])
            over();
        }
    return 1;
}



function over() {
    let mySound = new Audio('wrong.mp3')
    document.querySelector('body').classList.add("game-over");
    setTimeout(function() {
    document.querySelector('body').classList.remove("game-over");}, 100);
    colors.length=0;
    
    mySound.play()
    response.length=0;

    // setTimeout(function(){
    //     start();
    // },1000);
}

// Press effect
document.querySelectorAll('.btn')[0].addEventListener("click",function(){
    let mySound = new Audio('green.mp3')
    mySound.play()
    effect(0)
})
document.querySelectorAll('.btn')[1].addEventListener("click",function(){
    let mySound = new Audio('red.mp3')
    mySound.play()
    effect(1)
})
document.querySelectorAll('.btn')[2].addEventListener("click",function(){
    let mySound = new Audio('yellow.mp3')
    mySound.play()
    effect(2)
})
document.querySelectorAll('.btn')[3].addEventListener("click",function(){
    let mySound = new Audio('blue.mp3')
    mySound.play()
    effect(3)
})

function effect (a)
{

document.querySelectorAll('.btn')[a].classList.add("pressed");
setTimeout(function() {
document.querySelectorAll('.btn')[a].classList.remove("pressed");}, 100);
}

