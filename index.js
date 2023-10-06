const h1 = document.querySelector('h1')

h1.innerText =  'enter number 1'
h1.innerText =  'enter number 2'

function sumNumbers(event){
    event.preventDefault();
    //
    const numbers = event.target.num1.num2.value;
    //
    const result = num1 + num2

    const h2 = document.querySelector('h2');
    h2.innerText = 'result' 
}