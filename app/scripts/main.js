
// (function () {
//   'use strict';

  var taskTemplate = Handlebars.templates.task,
      // footerTemplate = Handlebars.templates.footer,
      $todoApp = $('#todoapp'),
      $header = this.$todoApp.find('#header'),
      $main = this.$todoApp.find('#main'),
      // $footer = this.$todoApp.find('#footer'),
      $form = this.$header.find('#form'),
      $newTodo = this.$header.find('#new-todo'),
      // $toggleAll = this.$main.find('#toggle-all'),
      $todoList = this.$main.find('#todo-list'),
      // $count = this.$footer.find('#todo-count'),
      // $clearBtn = this.$footer.find('#clear-completed'),

      tasks = [];

  // $.getJSON(todoURL).then(function (data) {
  //   tasks = tasks.concat(data);
  //   console.log('data has been fetched');
  // });


  // var todoURL = 'http://tiy-atl-fe-server.heokuapp.com/collections/timstodos';

  var Task = function () {
    this.id = uuid();
    this.completed = false;
    this.active = false;
  };

  Task.prototype = {

    create: function (title) {
      this.title = title;
      tasks.push(this);
      console.log(this);
      $todoList.prepend(taskTemplate(this));
      $newTodo[0].value='';

      // $.post(todoURL, task);

    },

    toggleComplete: function () {
      this.completed = !this.completed;
    },

    // delete: function () {

    // },

    // update: function () {

    // },
  };


  // Event watchers

  $form.on('submit', function (e) {
    e.preventDefault();
    var task = new Task();
    task.create($newTodo.val());
  });

  $todoList.on('click', 'input.toggle', function (e) {
    var $task = $(e.target).closest('li'),
        task = _.findWhere(tasks, {id: $task.attr('data-id')});
    task.toggleComplete();
    $task.toggleClass('completed');
  });

  $todoList.on('click', 'button.destroy', function () {
    console.log('DESTROY');
  });


// });


