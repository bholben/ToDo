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
      task.create('Get groceries');
    });

    describe('About adding a task', function () {
      it('should create an instance of task', function () {
        expect(task instanceof Task).to.equal(true);
      });

      it('should have an id', function () {
        expect(task.id).to.not.be.undefined;
      });

      it('should have a name', function () {
        expect(task.name).to.not.be.undefined;
      });

      it('should have a name of "Get groceries"', function () {
        expect(task.name).to.equal('Get groceries');
      });
    });

    describe('Able to toggle the task complete/incomplete', function () {
      it('should be able to toggle complete', function () {
        expect(task.complete).to.equal(false);
        task.toggleComplete();
        expect(task.complete).to.equal(true);
        task.toggleComplete();
        expect(task.complete).to.equal(false);
      });
    });

    describe('Adding Task', function () {
      it('should increase array length by 1', function () {
        expect(tasks).to.have.length(1);
        window.newTask = new Task();
        newTask.create('Get babysitter');
        expect(tasks).to.have.length(2);
      });
    });

    describe('Able to delete a task', function () {
      it('should delete a task', function () {
        task.delete();
        expect(task.active).to.equal(false);
      });
    });
  });
})();
