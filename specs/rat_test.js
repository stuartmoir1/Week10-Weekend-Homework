var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');

describe('Rat tests', function(){

  var rat;
  var food;

  beforeEach(function(){
    rat = new Rat("Rizzo");
    food = new Food("predator", 10);
  });

  it("Rat's name is set", function(){
    assert.strictEqual(rat.name, "Rizzo");
  });

  it("Rat has not touched any food", function(){
    assert.deepStrictEqual(rat.foodTouched, []);
  });

  it("Rat has touched food", function(){
    rat.touchFood(food);
    assert.deepStrictEqual(rat.foodTouched, [food]);
  });
});