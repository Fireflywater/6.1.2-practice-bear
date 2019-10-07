import { HungryBear } from "./../src/hungrybear.js";

describe("HungryBear", function() {
	let fuzzy;

	beforeEach(function() {
		fuzzy = new HungryBear("Fuzzy");
		jasmine.clock().install();
		fuzzy.setHunger();
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	});
	it("should have a name and all levels of 10 when it is created", function() {
		expect(fuzzy.name).toEqual("Fuzzy");
		expect(fuzzy.foodLevel).toEqual(10);
		expect(fuzzy.energyLevel).toEqual(10);
		expect(fuzzy.patienceLevel).toEqual(10);
	});

	it("should have all levels of 7 after 3001 milliseconds", function() {
		jasmine.clock().tick(3001);
		expect(fuzzy.foodLevel).toEqual(7);
		expect(fuzzy.energyLevel).toEqual(7);
		expect(fuzzy.patienceLevel).toEqual(7);
	});
	
	
	it("should get very hungry/impatient if the food/patience level drops below zero", function() {
		fuzzy.foodLevel = 0;
		fuzzy.patienceLevel = 0;
		expect(fuzzy.didYouGetEaten()).toEqual(true);
	});

	it("should get very impatient/hungry if 10 seconds pass without attention", function() {
		jasmine.clock().tick(10001);
		expect(fuzzy.didYouGetEaten()).toEqual(true);
	});

	it("should have a food level of 6, energy of 2, and patience of 2 if it is fed blueberries", function() {
		jasmine.clock().tick(9001);
		fuzzy.give(fuzzy.itemDB[0]);
		expect(fuzzy.foodLevel).toEqual(6);
		expect(fuzzy.energyLevel).toEqual(2);
		expect(fuzzy.patienceLevel).toEqual(2);
	});
	
	it("should have a food level of 1, energy of 16, and patience of 2 if it is given a matress", function() {
		jasmine.clock().tick(9001);
		fuzzy.give(fuzzy.itemDB[4]);
		expect(fuzzy.foodLevel).toEqual(1);
		expect(fuzzy.energyLevel).toEqual(16);
		expect(fuzzy.patienceLevel).toEqual(2);
	});
	
	it("'s levels should not exceed 100", function() {
		fuzzy.foodLevel = 100;
		fuzzy.energyLevel = 100;
		fuzzy.patienceLevel = 100;
		fuzzy.give("debug|debug|40|40|40");
		jasmine.clock().tick(1001);
		expect(fuzzy.foodLevel).toEqual(100);
		expect(fuzzy.energyLevel).toEqual(100);
		expect(fuzzy.patienceLevel).toEqual(100);
	});
});