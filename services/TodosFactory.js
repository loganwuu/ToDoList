Todos.factory('TodosFactory', function TodosFactory() {
    var factory = {};
    factory.todos = [];

    factory.addTodo = function() {
      var todo = ({ title: factory.todoTitle, id: factory.todos.length + 1});

      factory.todos.push(todo);
      factory.todoTitle = null;
    };

    return factory;
})
