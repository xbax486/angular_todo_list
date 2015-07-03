var myApp = angular.module('myApp', []);

myApp.controller('TodoCtrl', function($scope){
	$scope.todos = [
		{text: 'learing', done: false},
		{text: 'ccc', done: false},
	];

	$scope.addTodo = function(){
		$scope.todos.push({text: $scope.formTodoText, done: false});
		$scope.formTodoText = '';
	};

	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};

	$scope.getUncompletedTodos = function(){
		var uncompletedTodos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});

		return uncompletedTodos.length;
	};

	$scope.clearCompleted = function(){
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};
});