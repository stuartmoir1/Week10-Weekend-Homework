var Task = function(description, difficulty, urgency, reward, status){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.status = status;
};

module.exports = Task;