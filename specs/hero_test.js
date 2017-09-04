var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');
var Rat = require('../rat.js');

describe('Hero tests', function(){

  var hero;
  var food1, food2;
  var task1, task2, task3;
  var rat;

  beforeEach(function(){
    hero = new Hero("Major Alan 'Dutch' Schaefer", 100, "predator", "If it bleeds we can kill it");
    food1 = new Food("alien", 5);
    food2 = new Food("predator", 10);
    task1 = new Task("Kill predators", 3, 5, 75, true);
    task2 = new Task("Rescue prisoners", 2, 3, 50, true);
    task3 = new Task("Escape explosion blast", 4, 1, 100, false);
    rat = new Rat("Rizzo");
  });

  it("Hero's name is set", function(){
    assert.strictEqual(hero.name, "Major Alan 'Dutch' Schaefer");
  });

  it("Hero's health is set", function(){
    assert.strictEqual(hero.health, 100);
  });

  it("Hero's favourite food is set", function(){
    assert.strictEqual(hero.favFood, "predator");
  });

  it("Hero's list of tasks is empty", function(){
    assert.deepStrictEqual(hero.tasks, []);
  });

  it("Hero's catchphrase is set", function(){
    assert.strictEqual(hero.catchphrase, "If it bleeds we can kill it");
  });  

  it("Hero can say name", function(){
    assert.strictEqual(hero.sayName(), "Major Alan 'Dutch' Schaefer");
  });

  it("Hero can say catchphrase", function(){
    assert.strictEqual(hero.sayCatchphrase(), "If it bleeds we can kill it");
  });

  it("Add task to hero's task list", function(){
    hero.addTask(task1);
    assert.deepStrictEqual(hero.tasks, [task1]);
  });

  it("Remove task from hero's task list", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.removeTask(task1);
    assert.deepStrictEqual(hero.tasks, [task2]);
  })

  it("Hero eats food and health goes up by food health value", function(){
    hero.eatFood(food1, rat);
    assert.strictEqual(hero.health, 105);
  });

  it("Hero eats favourite food and health goes up by x1.5 food health value", function(){
    hero.eatFood(food2, rat);
    assert.strictEqual(hero.health, 115);
  });

  it("Sort hero tasks by difficulty level - ascending order", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortProperty("difficulty"), [task2, task1, task3]);
  });

  it("Sort hero tasks by difficulty level - descending order", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortProperty("difficulty").reverse(), [task3, task1, task2]);
  });

  it("Sort hero tasks by urgency level - ascending order", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortProperty("urgency"), [task3, task2, task1]);
  });

  it("Sort hero tasks by urgency level - descending order", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortProperty("urgency").reverse(), [task1, task2, task3]);
  });

  it("Sort hero tasks by reward - ascending order", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortProperty("reward"), [task2, task1, task3]);
  });

  it("Sort hero tasks by reward - descending order", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortProperty("reward").reverse(), [task3, task1, task2]);
  });

  it("Check status of task", function(){
    hero.addTask(task1);
    assert.equal(hero.checkTaskStatus(task1), true);
  });

  it("Change status of task", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.changeTaskStatus(task2, false);
    assert.equal(hero.checkTaskStatus(task2), false);
  });

  it("Get all open tasks", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.getTasks(true), [task1, task2]);
  });

  it("Get all closed tasks", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.getTasks(false), [task3]);
  });

  it("Hero eats poisonous food and health goes down by food health value", function(){
    rat.touchFood(food1);
    hero.eatFood(food1, rat);
    assert.strictEqual(hero.health, 95);
  });

  it("Rat touches food but hero eats other food", function(){
    rat.touchFood(food1);
    hero.eatFood(food2, rat);
    assert.strictEqual(hero.health, 115);
  });
});




























