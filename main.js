canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;
color="black";
width_of_line=1;
radius=20;
ctx.stroke();


canvas.addEventListener("mouseDown",my_mousedown);

function my_mousedown(e){
    color=cambio;
    console.log(color);
    width_of_line=newidth;
    radius= document.getElementById("dato").value;
    console.log(radius);
mouseEvent= "mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        console.log("Current position of x and y coordinates -");
        console.log("x - " +  current_position_of_mouse_x + "y - " +  current_position_of_mouse_y);
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width_of_line;
       ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2 * Math.PI);
       ctx.moveTo(last_position_of_x, last_position_of_y);
       ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    
    ctx.stroke();}  
    last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    


function reset(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}
var cambio="";
function morado(){
    cambio=document.getElementById("color-m").textContent;
    console.log (cambio);
}
function azul(){
    cambio=document.getElementById("color-a").textContent;
    console.log (cambio);
}
function rosa(){
    cambio=document.getElementById("color-r").textContent;
    console.log (cambio);
}
function claro(){
    cambio=document.getElementById("color-ab").textContent;
    console.log (cambio);
}
function verde(){
    cambio=document.getElementById("color-ve").textContent;
    console.log (cambio);
}
function fuerte(){
    cambio=document.getElementById("color-vf").textContent;
    console.log (cambio);
}
function amarillo(){
    cambio=document.getElementById("color-am").textContent;
    console.log (cambio);
}
function negro(){
    cambio=document.getElementById("color-neg").textContent;
    console.log (cambio);
}
function gris(){
    cambio=document.getElementById("color-gs").textContent;
    console.log (cambio);
}
function cafe(){
    cambio=document.getElementById("color-ca").textContent;
    console.log (cambio);
}
function rojo(){
    cambio=document.getElementById("color-roj").textContent;
    console.log (cambio);
}
function naranja(){
    cambio=document.getElementById("color-nara").textContent;
    console.log (cambio);
}
var newidth="";
function grueso(){
    newidth=30;
    console.log(newidth);
}
function media(){
    newidth=15;
    console.log(newidth);
}
function fina(){
    newidth=7.5;
    console.log(newidth);
}

