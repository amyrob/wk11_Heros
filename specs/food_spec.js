const assert = require('assert');
const Food = require('../food.js');

describe('Food', function () {
  let food;

  beforeEach( function () {
    food = new Food('tacos', 15);
  });

it('should get food name', function () {
  assert.strictEqual(food.food_name, 'tacos')
});

it('should get food replenishment value', function () {
  assert.strictEqual(food.replenishment_value, 15)
});


});
