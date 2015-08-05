define(['angular'], function(angular) {
    angular.module('myApp', [])
      .controller('MyController', ['$scope', function ($scope) {
        $scope.name = 'Change the name';
        $scope.age = 26;
      }]);

    angular.element(document).ready(function() {
      angular.bootstrap(document, ['myApp']);
    });
});