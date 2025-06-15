
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
let rpn = new RPN();

document.addEventListener("DOMContentLoaded", () => {
    // Push button
    document.getElementById("push").addEventListener("click", () => {
        let number = document.getElementById("number1");
        let n = parseInt(number.value);
        if (!isNaN(n)) {
            rpn.push(n);
            number.value = "";
            displayStack(rpn.stack);
        }
    });

    // Helper for binary operations
    function handleBinaryOperation(operation) {
        if (rpn.stack.length >= 2) {
            rpn[operation]();
            displayStack(rpn.stack);
        } else {
            alert("The stack must have at least two items for this operation.");
        }
    }

    document.getElementById("add").addEventListener("click", () => handleBinaryOperation("add"));
    document.getElementById("sub").addEventListener("click", () => handleBinaryOperation("subtract"));
    document.getElementById("mul").addEventListener("click", () => handleBinaryOperation("multiply"));
    document.getElementById("div").addEventListener("click", () => handleBinaryOperation("divide"));

    // Clear button
    document.getElementById("clear").addEventListener("click", () => {
        rpn.clear();
        displayStack(rpn.stack);
    });
});

function displayStack(stack) {
    let stackDisplay = document.getElementById("stackDisplay");
    stackDisplay.innerHTML = "";

    for (let i = stack.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.innerText = stack[i];
        stackDisplay.appendChild(li);
    }
}
