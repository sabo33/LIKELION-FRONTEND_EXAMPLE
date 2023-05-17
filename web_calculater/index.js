

function send(data){
    var display = document.getElementById('ipt');
    display.value=display.value+data;
}
function allClear(){
    opt.value="";
    ipt.value="";
}

function Power(){
    var display = document.getElementById('ipt');
    var result = eval(display.value*display.value);
    document.getElementById('opt').value = result;
   
}
function plus(){
    send("+");
}
function minus(){
    send("-");
}
function multiply(){
    send("*");
}
function divide(){
    send("/");
}

function calc(){
    var display=document.getElementById('ipt');
    var result = eval(display.value);
    document.getElementById('opt').value=result;
    display.value=display.value+"=";
}
