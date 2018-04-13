const assert = require('assert');
const Task = require('../task.js');

describe('Task', function() {
  let task;
  let completedStatus;


  beforeEach( function () {
    task = new Task('Easy', 1, 20, false);
  });


  it('should have a difficulty level', function () {
    assert.strictEqual(task.difficulty_level, 'Easy');
  });

  it('should have an urgency level', function () {
    assert.strictEqual(task.urgency_level, 1);
  });

  it('should have a reqard', function () {
    assert.strictEqual(task.reward, 20);
  });

  it('should have a completed status', function () {
    assert.strictEqual(task.status, false);
  });

  it('should be marked as completed', function () {
    task.complete(task);
    assert.strictEqual(task.status, true);
  });
});
