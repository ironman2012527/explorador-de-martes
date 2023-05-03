canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
Listimg=["marte_1.jpeg","marte_2.jpeg","marte_3.jpeg","marte_4.jpeg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
pared = Listimg[random_number];
console.log(pared);
Rover="rover.png"
ancho=100
alto=90
x=10
y=10
function agregar(){
fondoImgNvo = new Image();
fondoImgNvo.onload = uploadBackground;
fondoImgNvo.src = pared;

roverImgNvo = new Image();
roverImgNvo.onload= uploadrover;
roverImgNvo.src = Rover;

}
function uploadBackground()
{
ctx.drawImage(fondoImgNvo ,0,0, canvas.width, canvas.height);
}
function uploadrover() {
ctx.drawImage (roverImgNvo ,x,y, ancho, alto)
}
window.addEventListener("keydown" , mykeydown);
function mykeydown(e){
    keyPressed = e.keyCode
    console.log(keyPressed);
    if(keyPressed == "37")
{
    Left();
    console.log("Left");
}
if(keyPressed == "38")
{
    up();
    console.log("up");
}
if(keyPressed == "39")
{
    right();
    console.log("right");
}
if(keyPressed == "40")
{
    down();
    console.log("down");
}
}
function Left()
{
    if(x >= 0)
    {
        x = x - 10;
        console.log(x+","+y)
        uploadBackground();
        uploadrover();
    }
}
function up()
{
    if(y >=0)
    {
        y = y - 10;
        console.log(x+","+y)
        uploadBackground();
        uploadrover();
    }
}
function right(){
if(x <= 700)
    {
        x = x + 10;
        console.log(x+","+y)
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(y <= 500)
    {
        y = y + 10;
        console.log(x+","+y)
        uploadBackground();
        uploadrover();
    }
}