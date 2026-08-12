let num=document.getElementById("num");
let btn=document.getElementById("btn");
let result=document.getElementById("result");
btn.addEventListener("click",()=>{
    if(num.value>0){
        result.innerHTML="Positive Number";
    }
    else if(num.value<0){
        result.innerHTML="Negative Number";
    }
    else{
        result.innerHTML="Zero";
    }
})