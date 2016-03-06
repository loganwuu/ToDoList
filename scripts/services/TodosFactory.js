angular.module('todoListApp')
.factory('TodosFactory', function TodosFactory() {
  var factory = {};
  factory.todos = [];
  
  factory.addTodo= function() {
    var todo = ({ name: factory.todoName });
    
    factory.todos.unshift(todo);
    factory.todoName = null;
  };
  
  return factory;
})