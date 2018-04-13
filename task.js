const Task = function(difficulty_level, urgency_level, reward, status) {

  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.reward = reward;
  this.status = status;
};

Task.prototype.complete = function (task) {
  if(this.status === false ) {
    return this.status = true
  };
};


module.exports = Task;
