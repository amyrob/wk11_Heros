const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('Hero', function() {
  let hero;
  let tasks;
  let task;
  let food;

  beforeEach( function () {
    hero = new Hero('Deadpool', 100, 'tacos');
    task = new Task('Easy', 3, 20, false);
    task1 = new Task('Medium', 1, 50, false);
    task2 = new Task('Easy', 5, 15, true);
    food = new Food('tacos', 20);
    food1 = new Food('cheese burger', 5);
    tasks = [task, task1, task2 ];
  });

  it('should have a name', function () {
    assert.strictEqual(hero.name, 'Deadpool');
  });

  it('should have a health level', function () {
    assert.strictEqual(hero.health, 100);
  });

  it('should have a name', function () {
    assert.strictEqual(hero.favourite_food, 'tacos');
  });

  it('should say something', function () {
    const expected = hero.talk();
    assert.strictEqual(expected, 'Bad Deadpool...Good Deadpool!');
  });

  it('should have no tasks', function () {
    const expected = hero.tasks.length;
    assert.deepStrictEqual(expected, 0)
  });

  it('should add task', function () {
    hero.addTask(task);
    assert.deepStrictEqual(hero.tasks.length, 1);
  });

  it('should eat favourite food', function () {
    expected = hero.eatFood(food);
    assert.strictEqual(expected, 130);
  });

  it('should eat normal food', function () {
    expected = hero.eatFood(food1);
    assert.strictEqual(expected, 105);
  });

  it('should sort tasks by urgency', function() {
    hero.addTask(task);
    hero.addTask(task1);
    hero.addTask(task2);
    actual = [1, 3, 5];
    assert.deepStrictEqual(actual, hero.sortTasks());
  });

  it('should view tasks by status (false)', function() {
    hero.addTask(task);
    hero.addTask(task1);
    hero.addTask(task2);
    actual = [task, task1];
    assert.deepStrictEqual(actual, hero.viewByStatus(false));
  });

  it('should view tasks by status (true)', function() {
    hero.addTask(task);
    hero.addTask(task1);
    hero.addTask(task2);
    actual = [task2];
    assert.deepStrictEqual(actual, hero.viewByStatus(true));
  });
});
