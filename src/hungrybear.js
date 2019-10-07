export class HungryBear {
	constructor(name) {
		this.name = name;
		this.foodLevel = 10; // goes down over time
		this.energyLevel = 10; // goes donw over time, faster at 0 food
		this.patienceLevel = 10; // goes down over time, faster at 0 energy, too low = eaten
		this.difficulty = 1;
		this.eatenPlayer = false;
		this.itemDB = [
			//"NAME|ADJECTIVE|+/-FOOD|+/-EN|+/-PAT",
			"Blueberries|ate|5|1|1",
			"Salmon|ate|15|3|2",
			"Pineapple Pizza|ate|-5|2|-1",
			
			"Pillow|slept on|0|5|0",
			"Matress|slept on|0|15|1",
			
			"Gameboy|accidentally broke|0|0|5"
			
			
		];
	}
	
	setHunger() {
		setInterval(() => {
			let vars = ["foodLevel","energyLevel","patienceLevel"];
			for (let i = 0; i < vars.length; i++) {
				this[vars[i]]--;
				if (this[vars[i]] < 0) { this[vars[i]] = 0; }
				if (this[vars[i]] > 100) { this[vars[i]] = 100; }
			}
			if (this[vars[0]] === 0) { this[vars[1]]--; }
			if (this[vars[1]] === 0) { this[vars[2]]--; }
		}, 1000);
	}
	
	didYouGetEaten() {
		if ((this.patienceLevel > 0) || (this.foodLevel > 0)) {
			return false;
		} else {
			return true;
		}
	}
	

	/*feed(food, amnt) {
		this.foodLevel += Math.floor(amnt/this.difficulty);
		return `The bear ate the ${food}! Food level goes up ${amnt}!`;
	}*/
	
	give(inputItem) {
		let item = inputItem.split("|");
		this.foodLevel += parseInt(item[2]);
		this.energyLevel += parseInt(item[3]);
		this.patienceLevel += parseInt(item[4]);
		return `The bear ${item[1]} the ${item[0]}! Food level goes up ${item[2]}, Energy by ${item[3]}, and Patience by ${item[4]}`;
	}
	
	/*eatSmall() {this.feed("Blueberries",5)};}
	eatMedium() {this.feed("Salmon",10)};}
	eatLarge() {this.feed("Pick-a-nick Basket",15)};}
	eatYuck() {this.feed("Pineapple Pizza",-10)};}
	eatPowerup() {this.feed("The Ultimate Fish",50)};}
	eatSpecialBonus() {this.feed("Another Bear",100)};}
	eatWeirdThing() {this.feed("A d20",Math.floor((Math.random()*20)+1))};}*/
}