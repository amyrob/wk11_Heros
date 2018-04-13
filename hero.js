const Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.tasks = [];
};

Hero.prototype.talk = function () {
  return `Bad ${this.name}...Good ${this.name}!`
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.eatFood = function (food) {
  food_value = food.replenishment_value;
  if (food.food_name === this.favourite_food) { return this.health + (food_value * 1.5);}
  else { return this.health + food_value };
};

Hero.prototype.sortTasks = function () {
  var sorted = this.tasks.map( ( task ) => {return task.urgency_level} );
  return sorted.sort();
};

Hero.prototype.viewByStatus = function (status) {
  return this.tasks.filter ((task) => { return task.status === status});
};





module.exports = Hero;
