var list = ["Hi","Friends ","Welcome to","My Website!"];
var counter = 0;
var welcome = document.getElementsByClassName("welcome");
function write(event){
    welcome[0].innerHTML = list[counter%list.length];
    welcome[1].innerHTML = list[counter%list.length];
    welcome[2].innerHTML = list[counter%list.length];
    welcome[3].innerHTML = list[counter%list.length];
    counter++;
}
setInterval(write,1000);