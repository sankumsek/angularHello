var app = angular.module('app', []);

angular.module('myApp.controllers', []).controller('MyCtrl1', ["$scope",function($scope) {

  $scope.name = 'Hello World!'; 

}]);