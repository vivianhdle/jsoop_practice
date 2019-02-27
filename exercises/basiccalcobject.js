
class Calculator{
	constructor(){
		this.numbers = [];
		this.op = null;
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator(operator){
		var possibleOperators = ['+','-','*','/']
		if (possibleOperators.includes(operator)){
			this.op=operator;
			return true;
		} else {
			return false;
		}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(num){
		if (typeof num === 'number') {
			if (this.numbers.length<2){
				this.numbers.push(num)
				return this.numbers.length;
			} else {
				return false
			}
		} else {
			return false;
		}
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		var results = null;
		var num1 = this.numbers[0]
		var num2 = this.numbers[1]
		switch(this.op) {
			case '+':
				results = num1+num2;
				break;
			case '-':
				results = num1-num2;
				break;
			case '*':
			case 'x':
			case 'X':
				results = num1*num2
				break;
			case '/':
			case '÷':
				results = num1/num2;
				break;
			default:
				return 'Try again'
		}
		this.numbers = [];
		return results;

		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}