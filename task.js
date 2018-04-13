const Task = function(difficulty_level, urgency_level, reward, status) {

  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.reward = reward;
  this.completedStatus = false;
};

Task.prototype.complete = function (task) {
  if(task.completedStatus === false ) {
    return task.completedStatus = true
  };
};


module.exports = Task;
