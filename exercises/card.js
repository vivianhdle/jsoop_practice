
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		this.cards = [];
		//takes in nothing
		//make storage for your card objects
	}
	addCard( suit, faceValue ){
		var newCard = new Card(suit,faceValue);
		this.cards.push(newCard);
		return this.cards.length;
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		var shuffled = [];
		for (var arrayIndex=0;arrayIndex<this.cards.length;arrayIndex++){
			var randomIndex = Math.floor(Math.random()*this.cards.length);
			var randomCard = this.cards[randomIndex]
			shuffled.push(randomCard);
			this.cards.slice(randomIndex,1);
		}
		this.cards = shuffled;
		return this.cards;
		// this.cards.unshift(randomCard)
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		return this.cards.length;
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards(numberOfCards){
		var tempArray=[];
		var cardCount = this.getCardCount()-1;
		var iterations = cardCount-numberOfCards;
		if (iterations<0){
			iterations = -1;
		}
		for (var arrayIndex=cardCount;arrayIndex>iterations;arrayIndex--){
			tempArray.push(this.cards[arrayIndex]);
			this.cards.pop();
		}
		return tempArray;
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it,
			//in the opposite order they were added (last-in, first-out)
		//cannot return more cards than the deck has
	}
}