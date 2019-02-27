

class Account{
	constructor(){
		this.amount = 0;
		//store the amount of money in the account
	}
	add(deposit){
		if (deposit > 0){
			this.amount+=deposit;
			return this.amount;
		} else {
			return false;
		}
		//add money to the amount stored in the account
		//takes in an amount
		//checks if it is actually a number greater than 0
			//if not, return false
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		if (amount > 0){
			if (amount>this.amount){
				var amountWithdrawn = this.amount;
				this.amount-=this.amount;
				return amountWithdrawn;
			} else {
				this.amount-= amount;
				return amount;
			}
		} else {
			return false;
		}		
		//removes funds from an account
		//checks if amount is actually a number greater than 0
			//if not, return false
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.amount;
		//returns the amount in the account
	}
}