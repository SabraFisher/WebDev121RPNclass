class RPN {  /* decouple the calculator logic from the display of the program */
	
    stack = []; /* initialize an empty stack */

	push(n) {
		this.stack.push(n); /* this = calling on a class member of */
	}

	add() {
		this.stack.push(n2 + n1);
	}

	sub() {
		this.stack.push(n2 - n1);
	}

	clear() {
		this.stack = [];
	}
}