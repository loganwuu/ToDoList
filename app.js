var Todos = angular.module('Todos', ['ui.router']);

Todos.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('todos', {
    url: "/todos",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/todos.html",
        controller: "TodosCtrl"
      },
    }
  });
});
