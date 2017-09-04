var assert = require('assert');
var Food = require('../food.js');

describe('Food tests', function(){

  var food;

  beforeEach(function(){
    food = new Food("predator", 10);
  });

  it("Food name is set", function(){
    assert.strictEqual(food.name, "predator");
  });

  it("Food health value is set", function(){
    assert.strictEqual(food.healthValue, 10);
  });

});