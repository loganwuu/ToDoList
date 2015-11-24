Todos.controller('TodosCtrl', function TodosCtrl($scope, $stateParams, TodosFactory, UtilitiesFactory) {
  $scope.todos = TodosFactory.todos;
  $scope.currentTodo = UtilitiesFactory.findById($scope.todos, $stateParams.todoId);

  $scope.TodosFactory = TodosFactory;
});
