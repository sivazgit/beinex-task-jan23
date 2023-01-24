// get elemnet value
let result = document.getElementById("screen-value")


// to display number on input text box

function display(num){
    result.value += num
}

// to clear content in the text box

function clearBox(){
    result.value = " ";
}

// clearing one by one from text box

function removeItem(){
    crntexp = result.value
    result.value = crntexp.slice(0,-1)
}

let val = result.values.split(" ")
const evaluate = opr => {
    const [num1, operation, num2] = opr.split(" ");
    switch (operation) {
       case "+":
          return +num1 + +num2;
       case "/":
          return +num1 / +num2;
       case "-":
          return +num1 - +num2;
       case "*":
          return +num1 * +num2;
       case "%":
          return +num1 % +num2;
       default:
          return 0;
    }
 }
 
 // evaluate expressions (operations)

 function evaluateExp(){
    result.value = eval(result.value)

 }
