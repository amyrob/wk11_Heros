const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');

describe('Hero', function() {
  let hero;
  let tasks;
  let task;

  beforeEach( function () {
    hero = new Hero('Deadpool', 100, 'tacos');
    task = new Task('Easy', 1, 20, false);
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
});
