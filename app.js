var body = document.getElementById("body");
var hexCode = document.getElementById("hexCode");
var color1 = "#0000FF";
var color2 = "#808080";
var color3 = "#008000";
var color4 = "#00FFFF";
function changeColor1(){
    body.className="bg-primary";
    hexCode.innerHTML= color1;
}
function changeColor2(){
    body.className="bg-secondary";
    hexCode.innerHTML=color2;
}
function changeColor3(){
    body.className="bg-success";
    hexCode.innerHTML=color3;
}
function changeColor4(){
    body.className="bg-info";
    hexCode.innerHTML=color4;
}