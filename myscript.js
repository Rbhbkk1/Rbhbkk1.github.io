var title = document.getElementById('myTitle');
var button = document.getElementById('myButton');
var modalButton = document.getElementById('modalButton');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById("myContent")
var Myname = "";
var nameIn = document.getElementById('name');


title.onclick = function() {
    title.style.color = "";
}

button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}
close.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000)
}
modalButton.onclick = function() {
    Myname = nameIn.value;
    alert('Cообщение отправлено '+ Myname)
}

function none(){
    modal.style.display ="none"
}
function opacity1(){
    content.style.opacity = 1;
}

