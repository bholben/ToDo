console.log('Yo');

// (function () {
//   'use strict';

  var tasks = [];

  // $.getJSON(todoURL).then(function (data) {
  //   tasks = tasks.concat(data);
  //   console.log('data has been fetched');
  // });

  var taskTemplate = Handlebars.templates.task;
  // var taskTemplate = _.template($('#taskTemplate').html());

  // var todoURL = 'http://tiy-atl-fe-server.heokuapp.com/collections/timstodos';

  // var idGenerator = function () {
  //   return _.random(0, 9999);
  // };


  var uuid = function () {
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return uuid;
  };


  var Task = function () {
    this.id = uuid();
    this.completed = false;
    this.active = false;
  };

  Task.prototype = {

    create: function (title) {
      this.title = title || '';
      tasks.push(this);
      console.log(this);
      // console.log(taskTemplate);
      $('#todo-list').prepend(taskTemplate(this));

      // $.post(todoURL, task);

    },

    // toggleComplete: function () {
    //   this.completed = !this.completed;
    // },

    // delete: function () {

    // },

    // update: function () {

    // },
  };


  var taskName, task;

  // Submit event watcher
  $('form').on('submit', function (e) {
    e.preventDefault();

    taskName = $(this).find('#new-todo').val();
    // console.log(taskName);

    task = new Task();
    task.create(taskName);

  });

  // $('#todo-list').on('click', 'li', function (e) {
  //   var thisTask = event.target;
  //   var thisTaskID = Number($(thisTask).attr('id'));
  //       thisTaskID = Number(thisTask.id);  // same in vanilla JS

  //   var thisTaskInstance = _.findWhere(tasks, { id: thisTaskID });


  //   thisTaskInstance.toggleComplete();

  //   // $(thisTask).removeClass().addClass(thisTaskInstance.completed);

  // });


// });


