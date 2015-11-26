'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('This is the hello console service!');
  };
  
  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)
  };
  
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " to-do has been deleted.")
    // other logic 
  };
  
   this.saveTodos = function(todos) {
    console.log(todos.length + " to-dos has been saved.")
    // other logic...
  };
});