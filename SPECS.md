## Specs/Behaviors 
object AstroCalc(int) 
	Contains 3 arrays, one for planet names, one for conversions, one for output,
	Also contains 1 int for input and 1 string for a summary.
	User creates this object with earth years in mind.
	Also instantly calls AstroCalc.convert() when created.
	
function AstroCalc.convert()
	Takes AstroCalc.sourceAge and uses it to populate AstroCalc.age, based on AstroCalc.conv
	Creates a summary string too, for clarity

function AstroCalc.rebuild(int);
	Replaces AstroCalc.sourceAge with a new variable, then runs AstroCalc.convert()