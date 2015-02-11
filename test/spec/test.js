console.log('Hi from test.js');

// I should be able to add a todo item
// I should be able to mark the todo item complete
// I should be able to toggle the todo item back to uncomplete
// I should be able to delete the todo item so it's not in view any more.
//   > Hint: Just set a property deleted or something,
//           don't actually remove it from the Array
// Make sure your data matches your DOM at all times

(function () {
  'use strict';

  describe('About the ToDo List', function () {

    beforeEach(function () {
      window.task = new Task();
      window.task.complete = false;
      window.task.hidden = false;
    });

    describe('Able to add a task', function () {
      it('should add a task', function () {
        expect(task instanceof Task).to.equal(true);
      });

      it('should have a name', function () {
        expect(task.name).to.not.be.undefined;
      });
    });

    describe('Able to mark the task complete', function () {
      it('should mark task complete', function () {
        expect(task.complete).to.equal(false);
        task.complete = true;
        expect(task.complete).to.equal(true);
      });
    });

    describe('Able to toggle the task back to incomplete', function () {
      it('should change the task to incomplete', function () {
        task.complete = false;
        expect(task.complete).to.equal(false);
      });
    });

    describe('Able to hide a task', function () {
      it('should hide a task', function () {
        task.hidden = false;
        expect(task.hidden).to.equal(false);
      });
    });
  });
})();
