var eye=document.getElementById("eye");
var input=document.getElementById("Input");
eye.addEventListener("click",function(){
    if(input.type=="password"){
        input.type="text"
        eye.style.opaity=0.8
    }else{
        input.type="password"
    }
})