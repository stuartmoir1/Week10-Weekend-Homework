var Rat = function(name){
  this.name = name;
  this.foodTouched = [];
};

Rat.prototype = {

  touchFood: function(food){
    this.foodTouched.push(food);
  }
};

module.exports = Rat;