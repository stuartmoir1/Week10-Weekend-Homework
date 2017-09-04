var assert = require('assert');
var Task = require('../task.js');

describe('Task tests', function(){

  var task;

  beforeEach(function(){
    task = new Task("Kill predators", 5, 5, 100, false);
  });

    it("Task description is set", function(){
      assert.strictEqual(task.description, "Kill predators");
    });

  it("Task difficulty level is set", function(){
    assert.strictEqual(task.difficulty, 5);
  });

  it("Task urgency level is set", function(){
    assert.strictEqual(task.urgency, 5);
  });

  it("Task reward is set", function(){
    assert.strictEqual(task.reward, 100);
  });

  it("Task status is set", function(){
    assert.strictEqual(task.status, false);
  });
});