// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;


var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#f4427d";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);

/*---Form Scripts---*/

const form = document.querySelector('.form-login');
const inputName = document.querySelector('#name');
const inputAge = document.querySelector('#age');
const inputFac = document.querySelector('#fac');

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', inputName.value);
    localStorage.setItem('age', inputAge.value);
    localStorage.setItem('fac', inputFac.value);
    window.location = 'sheet.html'
}

/*function setLogin(){
    localStorage.setItem('player', inputName.value);
    localStorage.setItem('age', inputAge.value);
    localStorage.setItem('fac', inputFac.value);
    window.location = 'sheet.html'
}*/

let loginSound = new Audio()
loginSound.src = "./souds/login-sound.mp3"

form.addEventListener('submit', function(e) {
    e.preventDefault();
    loginSound.play()
    setTimeout(()=> {
        localStorage.setItem('player', inputName.value);
        localStorage.setItem('age', inputAge.value);
        localStorage.setItem('fac', inputFac.value);
        window.location = 'sheet.html'
        console.log("testes")}, 1600)
});