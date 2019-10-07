## Specs/Behaviors 
object `HungryBear(name)`
	Oh he's a big bear, he's a big strong bear! 
	
	`name = string` The name of the bear
	`foodLevel = int` How full the bear is of food
	`energyLevel = int` How full the bear is of energy
	`patienceLevel = int` A measurement of how little the bear has time for your garbage
	`itemDB = array` An array of strings for items to be used in `HungryBear.give()`
	
function `HungryBear.setHunger()`
	Begins the interval that does drains the bear's levels

function `HungryBear.didYouGetEaten()`
	Returns true if both `HungryBear.patienceLevel` and `HungryBear.foodLevel` are 0 or negative, else false
	
function `HungryBear.give(string)`
	Give an item as stated in `HungryBear.itemDB`, the bear will use this item to increase or decrease it's levels
	