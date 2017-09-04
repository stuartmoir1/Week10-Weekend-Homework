var Hero = function(name, health, favFood, catchphrase){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
  this.catchphrase = catchphrase;
};

Hero.prototype = {

  sayName: function(){
    return this.name;
  },

  sayCatchphrase: function(){
    return this.catchphrase;
  },

  addTask: function(task){
    this.tasks.push(task);
  },

  removeTask: function(task){
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  },

  // eatFood: function(food){
  //   var healthValue = food.healthValue;
  //   if (food.name === this.favFood){
  //     healthValue *= 1.5;
  //   };
  //   this.health += healthValue;
  // },

  eatFood: function(food, rat){
    var healthValue = food.healthValue;
    var foodPoisoned = rat.foodTouched.includes(food);

    if (foodPoisoned === false){
      if (food.name === this.favFood){
        healthValue *= 1.5; // Health boost.
      };
    } else { // Food has been poisoned.
      healthValue = -healthValue;
    }
    
    this.health += healthValue;
  },

  sortProperty: function(property){
    return this.tasks.sort(function(a, b){
      return a[property] - b[property];
    });
  },

  checkTaskStatus: function(task){
    var taskStatus;
    this.tasks.forEach(function(element){
      if (element === task){
        taskStatus = task.status;
        return;
      };
    });
    return taskStatus;
  },

  changeTaskStatus: function(task, status){
    this.tasks.forEach(function(element){
      if (element === task){
        task.status = status;
        return;
      };
    });
  },

  getTasks: function(status){
    var statusTasks = [];
    this.tasks.forEach(function(element){
      if (element.status === status){
        statusTasks.push(element);
      };
    });
    return statusTasks;
  }
};

module.exports = Hero;


















