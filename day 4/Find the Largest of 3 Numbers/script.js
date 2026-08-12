const numInput1 = document.getElementById('num1');
const numInput2 = document.getElementById('num2');
const numInput3 = document.getElementById('num3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    if(numInput1.value === '' || numInput2.value === '' || numInput3.value === '' ){
       
        return alert('Please enter all numbers');
    }
    const num1 = parseFloat(numInput1.value);
    const num2 = parseFloat(numInput2.value);
    const num3 = parseFloat(numInput3.value);
    const largest = Math.max(num1, num2, num3);
    result.textContent = `The largest number is: ${largest}`;
});