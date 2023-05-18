

function send(data){
    if(ipt.value!="" && opt.value!="")
    {
        ipt.value="";
        opt.value="";
    }
    var display = document.getElementById('ipt');
    display.value=display.value+data;
}
function allClear(){
    opt.value="";
    ipt.value="";
}

function Power(){
    if(ipt.value!="" && opt.value!="")
    {
        ipt.value=opt.value;
        opt.value="";
    }
    var display = document.getElementById('ipt');
    var result = eval(display.value*display.value);
    document.getElementById('opt').value = result;
   
}
function plus(){
    if(ipt.value!="" && opt.value!="")
    {
        ipt.value=opt.value;
        opt.value="";
    }
    send("+");
}
function minus(){
    if(ipt.value!="" && opt.value!="")
    {
        ipt.value=opt.value;
        opt.value="";
    }
    send("-");
}
function multiply(){
    if(ipt.value!="" && opt.value!="")
    {
        ipt.value=opt.value;
        opt.value="";
    }
    send("*");
}
function divide(){
    if(ipt.value!="" && opt.value!="")
    {
        ipt.value=opt.value;
        opt.value="";
    }
    send("/");
}

function calc(){
    var display=document.getElementById('ipt');
    var result = eval(display.value);
    document.getElementById('opt').value=result;
    display.value=display.value+"=";
}
