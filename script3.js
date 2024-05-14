// Generating the random color
var colors = [];
nextSequence();
function nextSequence() {
    var n = Math.random();
    var randomNumber = Math.floor(n * 4);


    colors.push(randomNumber);
    
    console.log(colors);
    // effect(randomNumber);
}

// Recording response   
var response = [];


document.querySelector("#green").addEventListener('click', function () {
    response.push(0);
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
        nextSequence();
    }
}


// TRIAL
function check1() {
    for (var x = 0; x < colors.length; x++) {
        console.log(" first "+ response[x]+" second " + colors[x])
        if (response[x] != colors[x])
            over();
        }
    return 1;
}



function over() {
    alert("GAME OVER BITCH");
    colors.length=0;
    nextSequence();
}

// Press effect
document.querySelectorAll('.btn')[0].addEventListener("click",function(){
    effect(0)
})
document.querySelectorAll('.btn')[1].addEventListener("click",function(){
    effect(1)
})
document.querySelectorAll('.btn')[2].addEventListener("click",function(){
    effect(2)
})
document.querySelectorAll('.btn')[3].addEventListener("click",function(){
    effect(3)
})

function effect (a)
{
document.querySelectorAll('.btn')[a].classList.add("pressed");
setTimeout(function() {
document.querySelectorAll('.btn')[a].classList.remove("pressed");}, 100);


}