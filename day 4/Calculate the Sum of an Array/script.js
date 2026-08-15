const arrayInput = document.getElementById("Array");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    let arr ;
    try {
        arr = JSON.parse(arrayInput.value);
    } catch (error) {
       
        return alert("Enter a valid array");
    }
    //const sum=arr.reduce((acc,curr)=> acc+curr,0)

    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        
    }
   result.innerText=`Sum of the array is ${sum}`
})
