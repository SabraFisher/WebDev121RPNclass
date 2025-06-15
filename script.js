"use strict";
/*
    subtract
    multiply
    divide
    clear stack button
*/

/*  to test if functions are being called properly and that they work
let rpn = new RPN();
rpn.push(5);
rpn.push(5);
rpn.add();
*/

document.addEventListener("DOMContentLoaded", (event) => {
    
    //make stack
    let stack = [];

    //get user input
    let pushbutton = document.getElementById("push");
    pushbutton.addEventListener("click", (event) => {
        let number = document.getElementById("number1");
        let n = parseInt(number.value);

        stack.push(n);
        number.value = "";
        displayStack(stack);
    });

    let addbutton = document.getElementById("add");
    addbutton.addEventListener("click", (event) => {

        if(stack.length >= 2) {
            let n2 = stack.pop();
            let n1 = stack.pop();

            stack.push(n2 + n1);
            displayStack(stack);
        } else {
            alert("The stack must have at least two items for this operation.");
        }

    });
    //do maths            

    let subtract = document.getElementById("sub");
    //console.log(subtract);
    subtract.addEventListener("click", (event) => {
        //console.log("i got called!");
        let n2 = stack.pop();
        let n1 = stack.pop();

        stack.push(n2 - n1);
        displayStack(stack);
    });

    let clearbutton = document.getElementById("clear");
    clearbutton.addEventListener("click", (event) => {
        stack = [];
        displayStack(stack);
    });
});


function displayStack(stack) {
    let stackDisplay = document.getElementById("stackDisplay");
    stackDisplay.innerHTML = "";

    for(let i = stack.length - 1; i >= 0; i--){
        let li = document.createElement("li");
        li.innerText = stack[i];
        stackDisplay.appendChild(li);
    }  

}