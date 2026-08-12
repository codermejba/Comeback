let num =document.getElementById("num");
let btn =document.getElementById("btn");
let result =document.getElementById("result");


btn.addEventListener("click",function(){
    if(num.value===''){
        return alert("Enter Number To Check Even Or Odd");
    }
    
    if(num.value % 2 === 0){
        result.innerText = `${num.value} is Even Number`;
    }
    else{
        result.innerText = `${num.value} is Odd Number`;
    }
})