const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function() {
  let hero;
  let tasks;

  beforeEach( function () {
    hero = new Hero('Deadpool', 100, 'tacos');

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
});
